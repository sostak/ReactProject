using UsersAPI.Dtos;

namespace UsersAPI.Entities
{
    public class User
    {
        public string Name { get; init; }
        public string LastName { get; init; }
        public string Country { get; init; }
        public int Age { get; init; }
        public int ID { get; init; }
    }
}
