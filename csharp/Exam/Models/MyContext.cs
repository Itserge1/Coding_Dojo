using Microsoft.EntityFrameworkCore;
namespace Exam.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class MyContext : DbContext 
    { 
        public MyContext(DbContextOptions options) : base(options) { }
        // the "Users " table name will come from the DbSet variable name
        public DbSet<User> Users { get; set; }
        public DbSet<Funtime> Funtimes { get; set; }
        public DbSet<Guess> Guesses { get; set; }
    }
}