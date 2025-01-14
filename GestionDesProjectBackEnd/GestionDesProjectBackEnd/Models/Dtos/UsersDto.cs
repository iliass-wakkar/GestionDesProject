using System.ComponentModel.DataAnnotations;

namespace GestionDesProjectBackEnd.Models.Dtos
{
    public class UsersDto
    {

        [Required(ErrorMessage = "Email is required.")]
        [StringLength(100, ErrorMessage = "Email cannot exceed 100 characters.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(100, MinimumLength = 4, ErrorMessage = "Password must be between 4 and 100 characters.")]
        public string Password { get; set; } = null!;



    }
}
