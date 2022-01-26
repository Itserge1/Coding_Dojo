using Microsoft.AspNetCore.Mvc;
using System;

namespace portfilo.Controllers
{
    public class PortfiloController : Controller
    {
        public static string Name;
        public static string Location;
        public static string Language;
        public static string Comment;
        
        [HttpGet]
        [Route("")]

        public IActionResult Index()
        {
            return View ("Index");
        }

        [HttpPost]
        [Route("Process")]
        public IActionResult Process(string name, string location, string language, string comment)
        {
            Console.WriteLine($"Name:{name}, Location: {location}, Language: {language}, Comment:{comment}");
            Name = name;
            Location = location;
            Language = language;
            Comment = comment;
            return RedirectToAction("Contact");
        }

        [HttpGet]
        [Route("Contact")]
        public IActionResult Contact()
        {
            ViewBag.Name = Name;
            ViewBag.Location = Location;
            ViewBag.Language = Language;
            ViewBag.Comment = Comment;
            return View("Project");
        }

    }
}