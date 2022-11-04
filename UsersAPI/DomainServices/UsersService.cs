using UsersAPI.Dtos;
using UsersAPI.Entities;
using UsersAPI.Infrastructure;
using EasyNetQ;
using Newtonsoft;

namespace UsersAPI.DomainServices
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _usersRepository;

        public UsersService(IUsersRepository repository)
        {
            _usersRepository = repository;
        }

        public List<UserDto> GetUsers()
        {
            return _usersRepository.ReadUsers();
        }

        public UserDto GetUser(string id)
        {
            return _usersRepository.ReadUser(id);
        }

        public UserDto PostNewUser(UserDto user)
        {
            return _usersRepository.PostNewUser(user);
        }

        public void DeleteUser(int id)
        {
            _usersRepository.DeleteUser(id);
        }
        UserDto IUsersService.UpdateUser(int id, UserDto user)
        {
            return _usersRepository.UpdateUser(id, user);
        }
    }
}
