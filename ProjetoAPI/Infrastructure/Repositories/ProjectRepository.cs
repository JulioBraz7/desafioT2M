using Dapper;
using ProjetoAPI.Domain.Entities;
using ProjetoAPI.Domain.Repositories;
using System.Data;

namespace ProjetoAPI.Infrastructure.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly IDbConnection _connection;

        public ProjectRepository(IDbConnection connection)
        {
            _connection = connection;
        }

        public async Task AddAsync(Project project)
        {
            var query = "INSERT INTO Projects (Id, Name, Description, Deadline, IsCompleted) VALUES (@Id, @Name, @Description, @Deadline, @IsCompleted)";
            await _connection.ExecuteAsync(query, project);
        }

        public async Task<IEnumerable<Project>> GetAllAsync()
        {
            return await _connection.QueryAsync<Project>("SELECT * FROM Projects");
        }

        public async Task<Project?> GetByIdAsync(Guid id)
        {
            return await _connection.QueryFirstOrDefaultAsync<Project>("SELECT * FROM Projects WHERE Id = @Id", new { Id = id });
        }

        public async Task UpdateAsync(Project project)
        {
            var query = "UPDATE Projects SET Name = @Name, Description = @Description, Deadline = @Deadline, IsCompleted = @IsCompleted WHERE Id = @Id";
            await _connection.ExecuteAsync(query, project);
        }

        public async Task DeleteAsync(Guid id)
        {
            var query = "DELETE FROM Projects WHERE Id = @Id";
            await _connection.ExecuteAsync(query, new { Id = id });
        }
    }
}
