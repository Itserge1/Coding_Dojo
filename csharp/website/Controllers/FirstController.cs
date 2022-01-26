using Microsoft.AspNetCore.Mvc;

namespace website.Controllers
{
    public class FirstController : Controller
    {
        //  Thos is where my route and controls go
        // There are two type of route here a GET AND A POST route
        [HttpGet]
        [Route("")]
        public ViewResult Index()
        {
            return View ("Index");
        }

        [HttpGet]
        [Route("second/{param}")]
        public ViewResult Second( string param)
        {
            ViewBag.myparam = param;
            return View ("Second");
        }

        [Route("third")]
        public IActionResult Third()
        {
            return RedirectToAction("Index");
        }
    }
}