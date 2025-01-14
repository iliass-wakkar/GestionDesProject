using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EMSI_Projet_GestionDuRestaurant.Token
{
    public class AccessTokeneGenerateur
    {
        public static string tokeneGenerateur(int id, string email, string type)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            // Hardcoded secret key
            var secretKey = "z~BZ45]&cQzRXP$&UPXrL6u+Y5&40F;E";
            var keyBytes = Encoding.UTF8.GetBytes(secretKey);

            // Create claims
            var claims = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new(JwtRegisteredClaimNames.Sub, id.ToString()),
                new(ClaimTypes.Email, email),
                new("type", type)
            };

            // Create token descriptor
            var tokenDescripteur = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(1),
                Issuer = "http://localhost:5071/api", // Hardcoded issuer
                Audience = "http://localhost:5173", // Hardcoded audience
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(keyBytes), SecurityAlgorithms.HmacSha256Signature)
            };

            // Generate token
            var token = tokenHandler.CreateToken(tokenDescripteur);
            return tokenHandler.WriteToken(token);
        }
    }
}