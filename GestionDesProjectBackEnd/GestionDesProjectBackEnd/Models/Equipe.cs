using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GestionDesProjectBackEnd.Models
{
    public partial class Equipe
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
        public string Nom { get; set; } = null!;

        [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
        public string? Description { get; set; }

        [StringLength(100, ErrorMessage = "Department cannot exceed 100 characters.")]
        public string? Department { get; set; }

        public virtual ICollection<Members> Members { get; set; } = new List<Members>();
    }
}