using AutoMapper;
using GestionDesProjectBackEnd.Data;
using GestionDesProjectBackEnd.Models;
using GestionDesProjectBackEnd.Models.Dtos;
using GestionDesProjectBackEnd.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GestionDesProjectBackEnd.Controller
{
    [Route("api")]
    [ApiController]
    [Authorize]
    public class TasksController : ControllerBase
    {
        private readonly ApplicationDbContext applicationDbContext;
        private readonly TokenValidator tokenValidator;
        private readonly IMapper mapper;
        private readonly IHttpContextAccessor httpContextAccessor;

        public TasksController(ApplicationDbContext applicationDbContext, TokenValidator tokenValidator, IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            this.applicationDbContext = applicationDbContext;
            this.tokenValidator = tokenValidator;
            this.mapper = mapper;
            this.httpContextAccessor = httpContextAccessor;
        }
        // Method to generate the base URL
        protected string GetBaseUrl()
        {
            var request = httpContextAccessor.HttpContext.Request;
            return $"{request.Scheme}://{request.Host}{request.PathBase}";
        }
        [HttpPost("tasks")]
        public async Task<IActionResult> AddTask([FromBody] TasksDto taskDto)
        {
            try
            {
                // Validate the token and extract the user
                var user = tokenValidator.ValidateToken(User);

                // Create a new task
                var task = mapper.Map<Tasks>(taskDto);

                // Add the task to the database
                applicationDbContext.Tasks.Add(task);
                await applicationDbContext.SaveChangesAsync();

                // Return the task ID
                return Ok("Task created successfully!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
