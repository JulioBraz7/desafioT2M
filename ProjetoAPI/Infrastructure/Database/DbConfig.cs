using Npgsql;
using System.Data;

namespace ProjetoAPI.Infrastructure.Database
{
    public static class DbConfig
    {
        public static IDbConnection GetConnection(string connectionString)
        {
            return new NpgsqlConnection(connectionString);
        }
    }
}
