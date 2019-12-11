using System.Threading.Tasks;
using Restaurant.API.Models;

namespace Restaurant.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string passsword);

         Task<User> Login(string username, string password);

         Task<bool> UserExists(string username);
    }
}