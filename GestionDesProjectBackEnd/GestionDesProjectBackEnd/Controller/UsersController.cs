using AutoMapper;
using EMSI_Projet_GestionDuRestaurant.Token;
using GestionDesProjectBackEnd.Data;
using GestionDesProjectBackEnd.Models;
using GestionDesProjectBackEnd.Models.Dtos;
using GestionDesProjectBackEnd.Token;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestionDesProjectBackEnd.Controller
{
    [Route("api")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext applicationDbContext;
        private readonly TokenValidator tokenValidator;
        private readonly IMapper mapper;
        private readonly IHttpContextAccessor httpContextAccessor;

        public UsersController(ApplicationDbContext applicationDbContext, TokenValidator tokenValidator, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            this.applicationDbContext = applicationDbContext;
            this.tokenValidator = tokenValidator;
            this.mapper = mapper;
            this.httpContextAccessor = httpContextAccessor;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UsersDto userDto)
        {
            var request = httpContextAccessor.HttpContext.Request;
            var baseUrl = $"{request.Scheme}://{request.Host}{request.PathBase}";

            try
            {
                // Find the user by email and password
                var user = applicationDbContext.AppUsers
                    .FirstOrDefault(u => u.Email == userDto.Email);

                if (user == null || !AppUsers.VerifyPassword(userDto.Password, user.Password))
                {
                    return Unauthorized("Invalid email or password!");
                }

                // Fetch user-specific data based on the user type
                object userData = null;
                if (user.Type == "Admin")
                {
                    userData = applicationDbContext.Admin
                        .FirstOrDefault(a => a.IdUser == user.IdUser);

                    // Add base URL to the Profile image path
                    if (userData != null && !string.IsNullOrEmpty(((Admin)userData).Profile))
                    {
                        ((Admin)userData).Profile = $"{baseUrl}/{((Admin)userData).Profile}";
                    }
                }
                else if (user.Type == "Member")
                {
                    userData = applicationDbContext.Members
                        .FirstOrDefault(m => m.IdUser == user.IdUser);

                    // Add base URL to the Profile image path
                    if (userData != null && !string.IsNullOrEmpty(((Members)userData).Profile))
                    {
                        ((Members)userData).Profile = $"{baseUrl}/{((Members)userData).Profile}";
                    }
                }

                // Generate the JWT token
                var token = AccessTokeneGenerateur.tokeneGenerateur(user.IdUser, user.Email, user.Type);

                // Create a response object that includes both the user data and the token
                var response = new
                {
                    User = userData,
                    Token = token
                };

                // Return the response
                return Ok(response);
            }
            catch (Exception e)
            {
                return StatusCode(500, "Internal server error\n" + e.Message);
            }
        }
    }
}
