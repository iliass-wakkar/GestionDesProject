using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;
using System.Text;

namespace GestionDesProjectBackEnd.Models
{
    public class AppUsers
    {
        [Key]
        public int IdUser { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [StringLength(100, ErrorMessage = "Email cannot exceed 100 characters.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; } = null!;

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(100, MinimumLength = 4, ErrorMessage = "Password must be between 4 and 100 characters.")]
        public string Password { get; set; } = null!;

        [Required(ErrorMessage = "User type is required.")]
        [RegularExpression("^(Member|Admin)$", ErrorMessage = "User type must be either 'Member' or 'Admin'.")]
        public string Type { get; set; } = null!; // Added Type property as a string

        public String? Profile { get; set; }
        
        public static String Hashpass(String pass)
        {
            using (var sha256 = SHA256.Create())
            {
                byte[] hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(pass));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower(); // return the hash as a hex string
            }
        }

        public static bool VerifyPassword(string enteredPassword, string storedHash)
        {
            var hashedEnteredPassword = Hashpass(enteredPassword);
            return storedHash == hashedEnteredPassword;
        }
    }


}