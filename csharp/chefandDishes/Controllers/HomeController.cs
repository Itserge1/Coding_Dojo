using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using chefandDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace chefandDishes.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _context = context;
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.AllChefs = _context.Chefs.Include(b => b.ChefDidhes).ToList();
            ViewBag.Today = DateTime.Today;
            return View();
        }

        // ++++++++++++++++++++++++++++
        //          ADD CHEF
        // ++++++++++++++++++++++++++++
        [HttpGet("newchef")]
        public IActionResult newChef()
        {
            return View("Newchef");
        }

        [HttpPost("addchef")]
        public IActionResult AddChef(Chef NewChef)
        {
            if (ModelState.IsValid)
            {
                _context.Chefs.Add(NewChef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("NewChef");
        }


        // ++++++++++++++++++++++++++++
        //          VIEW DISH
        // ++++++++++++++++++++++++++++
        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            ViewBag.AllDishes = _context.Dishes.Include(a => a.Chef).ToList();
            return View("Dishes");
        }

        // ++++++++++++++++++++++++++++
        //          ADD DISH
        // ++++++++++++++++++++++++++++
        [HttpGet("newdish")]
        public IActionResult newDish()
        {
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("Newdish");
        }

        [HttpPost("adddish")]
        public IActionResult AddDish(Dish NewDish)
        {
            if (ModelState.IsValid)
            {
                _context.Dishes.Add(NewDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AllChefs = _context.Chefs.ToList();
            ViewBag.Today = DateTime.Today;
            return View("Newdish");
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
