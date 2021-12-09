using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger, MyContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            ViewBag.AllDish = _context.Dishes.OrderBy(dish => dish.Name).ToList();
            return View();
        }


        // ++++++++++++++++++++++++++++++
        //          ADD DISH
        // ++++++++++++++++++++++++++++++

        [HttpGet("new")]
        public IActionResult New()
        {
            return View("New");
        }
        [HttpPost("AddDish")]
        public IActionResult AddDish(Dish newdish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(newdish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("New");
            }
        }


        // ++++++++++++++++++++++++++++++
        //          DELETE DISH
        // ++++++++++++++++++++++++++++++
        [HttpGet ("/delete/{dishId}")]
        public IActionResult DelecteDish(int dishId)
        {
            // Find the dish and store it in a variable
            Dish deleteDish = _context.Dishes.SingleOrDefault(dish => dish.DishId == dishId);
            // Remove form the database
            _context.Dishes.Remove(deleteDish);
            // Save Changes
            _context.SaveChanges();
            return RedirectToAction("Index");
        }


        // ++++++++++++++++++++++++++++++
        //          VEIW DISH
        // ++++++++++++++++++++++++++++++

        [HttpGet("/{idDish}")]
        public IActionResult View(int idDish)
        {
            Dish SelectDish = _context.Dishes.SingleOrDefault(dish => dish.DishId == idDish);
            ViewBag.DisH = SelectDish;
            // _context.SaveChanges();
            return View("View");
        }



        // ++++++++++++++++++++++++++++++
        //          EDIT DISH
        // ++++++++++++++++++++++++++++++
        [HttpGet("/edit/{dishid}")]
        public IActionResult Edit(int dishid)
        {
            Dish editDish = _context.Dishes.SingleOrDefault(dish => dish.DishId == dishid );
            return View(editDish);
        }

        [HttpPost("updateDish/{disHid}")]
        public IActionResult UpdateDish(int disHid, Dish dishToUpdate)
        {
            if(ModelState.IsValid)
            {

                // Find the old Version
                Dish oldDish = _context.Dishes.FirstOrDefault(dish => dish.DishId == disHid);
                oldDish.ChefName = dishToUpdate.ChefName;
                oldDish.Name = dishToUpdate.Name;
                oldDish.Calories = dishToUpdate.Calories;
                oldDish.Tastiness = dishToUpdate.Tastiness;
                oldDish.Description = dishToUpdate.Description;
                oldDish.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            else
            {
                return View("Edit", dishToUpdate);
            }
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
