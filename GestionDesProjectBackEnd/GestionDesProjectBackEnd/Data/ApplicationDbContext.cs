using System;
using System.Collections.Generic;
using GestionDesProjectBackEnd.Models;
using Microsoft.EntityFrameworkCore;

namespace GestionDesProjectBackEnd.Data
{
    public partial class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AppUsers> AppUsers { get; set; } // Add AppUsers DbSet
        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<Equipe> Equipe { get; set; }
        public virtual DbSet<Members> Members { get; set; }
        public virtual DbSet<Tasks> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the AppUsers table
            modelBuilder.Entity<AppUsers>(entity =>
            {
                entity.HasKey(e => e.IdUser).HasName("PK__AppUsers__3214EC076F73C946");

                entity.ToTable("AppUsers"); // Table name for AppUsers

                entity.Property(e => e.Email).HasMaxLength(100);
                entity.Property(e => e.Password).HasMaxLength(100);
                entity.Property(e => e.Type).HasMaxLength(50);

                // Configure inheritance for Admin and Members using TPH
                entity.HasDiscriminator<string>("Type")
                      .HasValue<Admin>("Admin")
                      .HasValue<Members>("Member");
            });

            // Configure the Admin table (no separate table needed for TPH)
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.Property(e => e.Username).HasMaxLength(50);
                entity.Property(e => e.FirstName).HasMaxLength(50);
                entity.Property(e => e.LastName).HasMaxLength(50);
                entity.Property(e => e.Poste).HasMaxLength(100);
                entity.Property(e => e.PhoneNumber).HasMaxLength(20);
            });

            // Configure the Members table (no separate table needed for TPH)
            modelBuilder.Entity<Members>(entity =>
            {
                entity.Property(e => e.Username).HasMaxLength(50);
                entity.Property(e => e.FirstName).HasMaxLength(50);
                entity.Property(e => e.LastName).HasMaxLength(50);
                entity.Property(e => e.Poste).HasMaxLength(100);
                entity.Property(e => e.PhoneNumber).HasMaxLength(20);

                // Relationship with Equipe
                entity.HasOne(d => d.Equipe)
                      .WithMany(p => p.Members)
                      .HasForeignKey(d => d.EquipeId)
                      .HasConstraintName("FK_Members_Equipe");
            });

            // Configure the Tasks table
            modelBuilder.Entity<Tasks>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("PK__Tasks__3214EC070CE2E8C2");

                entity.ToTable("Tasks"); // Table name for Tasks

                entity.Property(e => e.Name).HasMaxLength(100);

                // Relationship with Members
                entity.HasOne(d => d.Member)
                      .WithMany(p => p.Tasks)
                      .HasForeignKey(d => d.IdMembers)
                      .HasConstraintName("FK_Tasks_Members");
            });

            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}