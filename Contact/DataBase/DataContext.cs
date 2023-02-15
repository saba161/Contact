using Microsoft.EntityFrameworkCore;

namespace Contact.DataBase;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options)
        : base(options)
    {
    }
}