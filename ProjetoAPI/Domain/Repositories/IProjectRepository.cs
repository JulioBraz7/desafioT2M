using ProjetoAPI.Domain.Entities; 

namespace ProjetoAPI.Domain.Repositories
{
    public interface IProjectRepository
    {
        Task AddAsync(Project project);
        Task<IEnumerable<Project>> GetAllAsync();
        Task<Project?> GetByIdAsync(Guid id);
        Task UpdateAsync(Project project);
        Task DeleteAsync(Guid id);
    }
}
