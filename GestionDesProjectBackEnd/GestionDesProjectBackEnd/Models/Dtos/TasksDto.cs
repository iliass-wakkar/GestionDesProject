using System.ComponentModel.DataAnnotations;

namespace GestionDesProjectBackEnd.Models.Dtos
{
    public class TasksDto
    {
        [Required(ErrorMessage = "Check-in date is required.")]
        public DateOnly? CheckInDate { get; set; }

        [Required(ErrorMessage = "Check-out date is required.")]
        public DateOnly? CheckoutDate { get; set; }

        [StringLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name cannot exceed 100 characters.")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Member ID is required.")]
        public int? IdMembers { get; set; }

        // Include Member data
        public MemberDto? Member { get; set; }

    }
}
