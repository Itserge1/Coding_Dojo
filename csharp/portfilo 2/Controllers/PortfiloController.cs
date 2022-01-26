using Microsoft.AspNetCore.Mvc;

namespace portfilo.Controllers
{
    public class PortfiloController : Controller
    {
        [HttpGet]
        [Route("")]

        public ViewResult Index()
        {
            return View ("Index");
        }

        [HttpGet]
        [Route("project")]
        public ViewResult Project()
        {
            return View("Project");
        }
        [HttpGet]
        [Route("contact")]
        public ViewResult Contact()
        {
            return View("Contact");
        }
    }
}