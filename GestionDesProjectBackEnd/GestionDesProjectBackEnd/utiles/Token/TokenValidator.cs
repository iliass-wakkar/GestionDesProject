using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using GestionDesProjectBackEnd.Data;
using GestionDesProjectBackEnd.Models;

namespace GestionDesProjectBackEnd.Token
{
    public class TokenValidator
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public TokenValidator(ApplicationDbContext dbConn)
        {
            _applicationDbContext = dbConn;
        }

        public AppUsers ValidateToken(ClaimsPrincipal user)
        {
            // Extract token claims
            var userIdFromToken = user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var userEmailFromToken = user.FindFirst(ClaimTypes.Email)?.Value;
            var type = user.FindFirst("Type")?.Value;

            // Validate token claims
            if (string.IsNullOrEmpty(userIdFromToken) ||
                string.IsNullOrEmpty(userEmailFromToken) ||
                string.IsNullOrEmpty(type))
            {
                throw new UnauthorizedAccessException("Invalid token claims");
            }

            // Parse the user ID from the token
            if (!int.TryParse(userIdFromToken, out int userId))
            {
                throw new UnauthorizedAccessException("Invalid user ID in token");
            }

            // Validate the user in the database
            var appUser = _applicationDbContext.AppUsers
                .FirstOrDefault(o =>
                    o.Email == userEmailFromToken &&
                    o.Type == type &&
                    o.IdUser == userId);

            if (appUser == null)
            {
                throw new UnauthorizedAccessException("Invalid access token");
            }

            return appUser; // Return the validated user
        }
    }
}