using Microsoft.AspNetCore.Mvc;

namespace Contact.Controllers;

public class HomeController : Controller
{
    public HomeController(ILogger<HomeController> logger)
    {
    }

    public IActionResult Index()
    {
        return View();
    }
}