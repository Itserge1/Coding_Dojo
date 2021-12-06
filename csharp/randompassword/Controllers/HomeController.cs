using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using randompassword.Models;

namespace randompassword.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public static string pwd = "Need A Password? Click Below";

        public IActionResult Index()
        {
            ViewBag.password = pwd;
            Console.WriteLine(pwd);
            return View("Index",pwd);
        }

        [HttpPost("generate")]
        public IActionResult Generate()
        {
            string chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            Random rand = new Random();
            string temp ="";
            for (int i=0; i< 14; i++){
            string character = chars[rand.Next(chars.Length)].ToString();
            temp += character;
            }
            // Console.WriteLine(temp);
            HttpContext.Session.SetString("password", temp);
            pwd = HttpContext.Session.GetString("password");
            Console.WriteLine(pwd);
            return RedirectToAction("Index");
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
