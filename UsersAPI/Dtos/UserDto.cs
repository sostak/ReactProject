using UsersAPI.Entities;

namespace UsersAPI.Dtos
{
    public class UserDto
    {
        public string Name { get; init; }
        public string LastName { get; init; }
        public string Country { get; init; }
        public int Age { get; init; }
        public int ID { get; set; }
    }
}
