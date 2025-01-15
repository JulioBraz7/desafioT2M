using Microsoft.AspNetCore.Mvc;
using ProjetoAPI.Domain.Entities;
using ProjetoAPI.Domain.Repositories;

namespace ProjetoAPI.Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly IProjectRepository _projectRepository;

        public ProjectController(IProjectRepository projectRepository)
        {
            _projectRepository = projectRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Project project)
        {
            await _projectRepository.AddAsync(project);
            return CreatedAtAction(nameof(GetById), new { id = project.Id }, project);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _projectRepository.GetAllAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var project = await _projectRepository.GetByIdAsync(id);
            return project is null ? NotFound() : Ok(project);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] Project project)
        {
            if (id != project.Id) return BadRequest();
            await _projectRepository.UpdateAsync(project);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _projectRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
