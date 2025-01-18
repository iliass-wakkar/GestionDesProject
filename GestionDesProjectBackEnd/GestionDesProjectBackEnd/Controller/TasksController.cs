using AutoMapper;
using GestionDesProjectBackEnd.Data;
using GestionDesProjectBackEnd.Models;
using GestionDesProjectBackEnd.Models.Dtos;
using GestionDesProjectBackEnd.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionDesProjectBackEnd.Controller
{
    [Route("api/tasks")]
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

        [HttpPost]
        public async Task<IActionResult> AddTask([FromBody] TasksDto taskDto)
        {
            try
            {
                // Validate the token and extract the user
                var user = tokenValidator.ValidateToken(User);
                if (user.Type == "Admin")
                {
                    // Create a new task
                    var task = mapper.Map<Tasks>(taskDto);

                    // Add the task to the database
                    applicationDbContext.Tasks.Add(task);
                    await applicationDbContext.SaveChangesAsync();

                    // Return success message
                    return Ok(new { message = "Task created successfully!" });
                }
                else
                {
                    return Unauthorized(new { message = "Only admin can create tasks!" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetTasks()
        {
            try
            {
                var user = tokenValidator.ValidateToken(User);
                if (user.Type == "Admin")
                {
                    // Use LINQ to join Tasks and AppUsers
                    var tasks = await applicationDbContext.Tasks
                        .Include(t => t.Member) // Include the Member navigation property
                        .Select(t => new
                        {
                            t.Id,
                            t.CheckInDate,
                            t.CheckoutDate,
                            t.Description,
                            t.Name,
                            t.IdMembers,
                            Member = new
                            {
                                t.Member.Username,
                                t.Member.FirstName,
                                t.Member.LastName,
                                t.Member.Poste,
                                t.Member.PhoneNumber,
                                t.Member.EquipeId,
                                t.Member.IdUser,
                                t.Member.Email,
                                t.Member.Type
                            }
                        })
                        .ToListAsync();

                    // Return the list of tasks with Member data
                    return Ok(tasks);
                }
                else if (user.Type == "Member")
                {
                    // Use LINQ to join Tasks and AppUsers
                    var tasks = await applicationDbContext.Tasks
                        .Where(t => t.IdMembers == user.IdUser) // Corrected the Where clause
                        .Include(t => t.Member) // Include the Member navigation property
                        .Select(t => new
                        {
                            t.Id,
                            t.CheckInDate,
                            t.CheckoutDate,
                            t.Description,
                            t.Name,
                            t.IdMembers,
                            Member = new
                            {
                                t.Member.Username,
                                t.Member.FirstName,
                                t.Member.LastName,
                                t.Member.Poste,
                                t.Member.PhoneNumber,
                                t.Member.EquipeId,
                                t.Member.IdUser,
                                t.Member.Email,
                                t.Member.Type
                            }
                        })
                        .ToListAsync(); // Changed to return a list of tasks

                    if (tasks == null || !tasks.Any())
                    {
                        return NotFound(new { message = "No tasks found for the member." });
                    }

                    // Return the list of tasks with Member data
                    return Ok(tasks);
                }
                else
                {
                    return Unauthorized(new { message = "User is not authorized to access this resource." });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskById(int id)
        {
            try
            {
                var user = tokenValidator.ValidateToken(User);
                if (user.Type == "Admin" || user.Type == "Member")
                {
                    // Retrieve the task by ID and include the Member navigation property
                    var task = await applicationDbContext.Tasks
                        .Include(t => t.Member) // Include the Member navigation property
                        .FirstOrDefaultAsync(t => t.Id == id);

                    if (task == null)
                    {
                        return NotFound(new { message = "Task not found!" });
                    }

                    // Map the task to a response object
                    var response = new
                    {
                        task.Id,
                        task.CheckInDate,
                        task.CheckoutDate,
                        task.Description,
                        task.Name,
                        task.IdMembers,
                        Member = new
                        {
                            task.Member.Username,
                            task.Member.FirstName,
                            task.Member.LastName,
                            task.Member.Poste,
                            task.Member.PhoneNumber,
                            task.Member.EquipeId,
                            task.Member.IdUser,
                            task.Member.Email,
                            task.Member.Type
                        }
                    };

                    // Return the task
                    return Ok(response);
                }
                else
                {
                    return Unauthorized(new { message = "User is not authorized to access this resource." });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateTask(int id, [FromBody] TasksDto taskDto)
        {
            try
            {
                var user = tokenValidator.ValidateToken(User);
                if (user.Type == "Admin")
                {
                    // Retrieve the task by ID
                    var task = await applicationDbContext.Tasks
                        .FirstOrDefaultAsync(t => t.Id == id);

                    if (task == null)
                    {
                        return NotFound(new { message = "Task not found!" });
                    }

                    // Update the task with the new data
                    mapper.Map(taskDto, task);

                    // Save changes to the database
                    await applicationDbContext.SaveChangesAsync();

                    

                    // Return success message and the updated task
                    return Ok(new { message = "Task updated successfully!" });
                }
                else
                {
                    return Unauthorized(new { message = "Only admin can update tasks!" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            try
            {
                var user = tokenValidator.ValidateToken(User);
                if (user.Type == "Admin")
                {
                    // Retrieve the task by ID
                    var task = await applicationDbContext.Tasks
                        .Include(t => t.Member) // Include the Member navigation property
                        .FirstOrDefaultAsync(t => t.Id == id);

                    if (task == null)
                    {
                        return NotFound(new { message = "Task not found!" });
                    }

                    // Remove the task from the database
                    applicationDbContext.Tasks.Remove(task);
                    await applicationDbContext.SaveChangesAsync();

                    

                    // Return success message and the deleted task
                    return Ok(new { message = "Task deleted successfully!" });
                }
                else
                {
                    return Unauthorized(new { message = "Only admin can delete tasks!" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}