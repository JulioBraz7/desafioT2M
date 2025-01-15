namespace ProjetoAPI.Domain.Entities
{
    public class Project
    {
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public DateTime Deadline { get; set; }
        public bool IsCompleted { get; set; }
    }
}
