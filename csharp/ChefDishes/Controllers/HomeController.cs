using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefDishes.Controllers
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
            ViewBag.AllChefs = _context.Chefs.Include(b => b.ChefDishes).ToList();
            ViewBag.Today = DateTime.Today;
            return View();
        }

        // ===========================
        // ADD CHEF (view page)
        // ===========================

        // 1 - View The Page

        [HttpGet("newchef")]
        public IActionResult Newchef()
        {
            return View("AddChef");
        }

        // 2 -  Adding the Chef

        [HttpPost("addchef")]
        public IActionResult Addchef(Chef newChef)
        {
            if(ModelState.IsValid)
            {
                _context.Chefs.Add(newChef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("AddChef");
        }

        // ===========================
        //  ADD DISH (view page)
        // ===========================
        
        // 1 - View The Page

        [HttpGet("newdish")]
        public IActionResult Newdish()
        {
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("AddDish");
        }

        // 2 -  Adding the Dish

        [HttpPost("adddish")]
        public IActionResult Adddish(Dish newdish)
        {
            if(ModelState.IsValid)
            {
            _context.Dishes.Add(newdish);
            _context.SaveChanges();
            return RedirectToAction("Index");
            }
            ViewBag.AllChefs = _context.Chefs.ToList();
            return View("AddDish");
        }

        // ===========================
        // View Dishes (view page)
        // ===========================

        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            ViewBag.AllDishes = _context.Dishes.Include(d => d.MyChef);
            return View("Dishes");
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
