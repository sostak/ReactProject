using UsersAPI.Dtos;
using UsersAPI.Entities;
using Npgsql;
using System.Data;

namespace UsersAPI.Infrastructure
{
    public interface IUsersRepository
    {
        List<UserDto> ReadUsers();
        UserDto ReadUser(string id);
        UserDto PostNewUser(UserDto user);
        void DeleteUser(int id);
        UserDto UpdateUser(int id, UserDto user);
    }
}