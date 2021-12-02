using Microsoft.AspNetCore.Mvc;

namespace portfilo.Controllers
{
    public class PortfiloController : Controller
    {
        [HttpGet]
        [Route("")]

        public string Index()
        {
            return "This is my index";
        }

        [HttpGet]
        [Route("project")]
        public string Project()
        {
            return "These are my projects";
        }
        [HttpGet]
        [Route("contact")]
        public string Contact()
        {
            return "This is my contact";
        }
    }
}