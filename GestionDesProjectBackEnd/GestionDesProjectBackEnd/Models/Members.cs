using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GestionDesProjectBackEnd.Models
{
    public partial class Members : AppUsers
    {
        [Required(ErrorMessage = "Username is required.")]
        [StringLength(50, ErrorMessage = "Username cannot exceed 50 characters.")]
        public string Username { get; set; } = null!;

        [StringLength(50, ErrorMessage = "First name cannot exceed 50 characters.")]
        public string? FirstName { get; set; }

        [StringLength(50, ErrorMessage = "Last name cannot exceed 50 characters.")]
        public string? LastName { get; set; }

        [StringLength(100, ErrorMessage = "Poste cannot exceed 100 characters.")]
        public string? Poste { get; set; }

        [StringLength(20, ErrorMessage = "Phone number cannot exceed 20 characters.")]
        [RegularExpression(@"^\+?[0-9]{10,20}$", ErrorMessage = "Phone number must be a valid number.")]
        public string? PhoneNumber { get; set; }

        public int? EquipeId { get; set; }

        public virtual Equipe? Equipe { get; set; }

        [JsonIgnore]
        public virtual ICollection<Tasks> Tasks { get; set; } = new List<Tasks>();
    }
}