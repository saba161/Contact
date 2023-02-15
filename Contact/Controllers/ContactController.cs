using Contact.DataBase;
using Contact.Models;
using Microsoft.AspNetCore.Mvc;

namespace Contact.Controllers;

public class ContactController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public IActionResult Read(int id)
    {
        var userContacts = Data.UserContacts
            .FirstOrDefault(x => x.Id == id);

        return Ok(userContacts);
    }

    [HttpPost]
    public IActionResult Create(UserContact userContact)
    {
        Data.UserContacts.Add(userContact);
        return Ok($"Create {userContact}");
    }

    [HttpPut]
    public IActionResult Update(UserContact userContact)
    {
        return Ok($"Update {userContact}");
    }

    [HttpDelete]
    public IActionResult Delete(int id)
    {
        return Ok($"Deleted id: {id}");
    }
}