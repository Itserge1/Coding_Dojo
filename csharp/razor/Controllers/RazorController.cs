using Microsoft.AspNetCore.Mvc;

namespace Razor.Controllers
{
    public class RazorController : Controller
    {
        [HttpGet]
        [Route("")]

        public ViewResult Index()
        {
            return View ("Index");
        }

    }
}