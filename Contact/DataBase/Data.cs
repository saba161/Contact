using Contact.Models;

namespace Contact.DataBase;

public static class Data
{
    public static List<UserContact> UserContacts = new List<UserContact>()
    {
        new UserContact()
        {
            Id = 1,
            FirstName = "Saba",
            LastName = "Koghuashvil",
            //Age = 23,
            Email = "SabaKoghuahsvili16@gmail.com",
            Phone = "591171518"
        },
        new UserContact()
        {
            Id = 2,
            FirstName = "Lasha",
            LastName = "JIbla",
            //Age = 23,
            Email = "lasha@gmail.com",
            Phone = "8437232"
        }
    };
}