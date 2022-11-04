using UsersAPI.Dtos;
using UsersAPI.Entities;
using Npgsql;
using System.Data;

namespace UsersAPI.Infrastructure
{
    public class UsersRepository : IUsersRepository
    {
        public List<UserDto> ReadUsers()
        {
            var cs = "Host=localhost;Username=postgres;Password=postgres;Database=postgres";

            using var connection = new NpgsqlConnection(cs);
            connection.Open();

            var sql = "SELECT name, lastname, country, age, id FROM project.users; ";

            List<UserDto> users = new List<UserDto>();

            using (var command = new NpgsqlCommand(sql, connection))
            {
                var dataAdapter = new NpgsqlDataAdapter(command);
                var dataTable = new DataTable();
                dataAdapter.Fill(dataTable);

                foreach (DataRow row in dataTable.Rows)
                {
                    var user = row;

                    users.Add(new User()
                    {
                        Name = Convert.ToString(user["name"]),
                        LastName = Convert.ToString(user["lastname"]),
                        Country = Convert.ToString(user["country"]),
                        Age = Convert.ToInt32(user["age"]),
                        ID = Convert.ToInt32(user["id"])
                    }.AsDto());

                }
            }

            connection.Close();
            return users;
        }

        public UserDto ReadUser(string id)
        {
            var cs = "Host=localhost;Username=postgres;Password=postgres;Database=postgres";

            using var connection = new NpgsqlConnection(cs);
            connection.Open();

            var sql = String.Format("SELECT name, lastname, country, age, id FROM project.users WHERE id = {0}; ", id);

            UserDto user;
            using (var command = new NpgsqlCommand(sql, connection))
            {
                var dataAdapter = new NpgsqlDataAdapter(command);
                var dataTable = new DataTable();
                dataAdapter.Fill(dataTable);
                var data = dataTable.Rows[0];

                user = new User()
                {
                    Name = Convert.ToString(data["name"]),
                    LastName = Convert.ToString(data["lastname"]),
                    Country = Convert.ToString(data["country"]),
                    Age = Convert.ToInt32(data["age"]),
                    ID = Convert.ToInt32(data["id"])
                }.AsDto();
            }

            connection.Close();
            return user;
        }

        public UserDto PostNewUser(UserDto user)
        {
            var cs = "Host=localhost;Username=postgres;Password=postgres;Database=postgres";

            using var connection = new NpgsqlConnection(cs);
            connection.Open();

            var sql = String.Format("INSERT INTO project.users(name, lastname, country, age) VALUES('{0}', '{1}', '{2}', {3});", user.Name, user.LastName, user.Country, user.Age);
            var command = new NpgsqlCommand(sql, connection);
            command.ExecuteNonQuery();

            sql = "SELECT name, lastname, country, age, id FROM project.users WHERE id = (SELECT MAX (id) FROM project.users);";
            UserDto createdUser;
            using (command = new NpgsqlCommand(sql, connection))
            {
                var dataAdapter = new NpgsqlDataAdapter(command);
                var dataTable = new DataTable();
                dataAdapter.Fill(dataTable);
                var data = dataTable.Rows[0];

                createdUser = new User()
                {
                    Name = Convert.ToString(data["name"]),
                    LastName = Convert.ToString(data["lastname"]),
                    Country = Convert.ToString(data["country"]),
                    Age = Convert.ToInt32(data["age"]),
                    ID = Convert.ToInt32(data["id"])
                }.AsDto();
            }

            connection.Close();

            return createdUser;
        }

        public void DeleteUser(int id)
        {
            var cs = "Host=localhost;Username=postgres;Password=postgres;Database=postgres";

            using var connection = new NpgsqlConnection(cs);
            connection.Open();

            var sql = String.Format("DELETE FROM project.users WHERE id = {0};", id);
            var command = new NpgsqlCommand(sql, connection);
            command.ExecuteNonQuery();

            connection.Close();
        }

        public UserDto UpdateUser(int id, UserDto user)
        {
            var cs = "Host=localhost;Username=postgres;Password=postgres;Database=postgres";

            using var connection = new NpgsqlConnection(cs);
            connection.Open();

            var sql = String.Format("UPDATE project.users SET name='{0}', lastname='{1}', country='{2}', age={3} WHERE id = {4};", user.Name, user.LastName, user.Country, user.Age, id);
            var command = new NpgsqlCommand(sql, connection);
            command.ExecuteNonQuery();

            return ReadUser(id.ToString());
        }
    }
}
