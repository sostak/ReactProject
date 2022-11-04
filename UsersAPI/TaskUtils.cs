using UsersAPI.Dtos;
using UsersAPI.Entities;

namespace UsersAPI
{
    public static class TaskUtils
    {
        public static UserDto AsDto(this User user)
        {
            UserDto dto = new UserDto()
            {
                Name = user.Name,
                LastName = user.LastName,
                Age = user.Age,
                Country = user.Country,
                ID = user.ID
            };

            return dto;
        }
    }
}
