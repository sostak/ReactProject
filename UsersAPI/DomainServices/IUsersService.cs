using UsersAPI.Dtos;

namespace UsersAPI.DomainServices
{
    public interface IUsersService
    {
        List<UserDto> GetUsers();
        UserDto GetUser(string id);
        UserDto PostNewUser(UserDto user);
        void DeleteUser(int id);
        UserDto UpdateUser(int id, UserDto user);
    }
}
