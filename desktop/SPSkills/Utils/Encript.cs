using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPSkills.Utils
{
    public class Encript
    {
        public static string GenerateHash(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        public static bool ComparePassword(string passwordLogin, string passwordSql)
        {
            return BCrypt.Net.BCrypt.Verify(passwordLogin, passwordSql);
        }
    }
}
