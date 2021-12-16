using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace WeddingPlanner.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger,  MyContext context)
        {
            _context = context;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }


        // ++++++++++++++++++++++
        //         Login
        // ++++++++++++++++++++++

        [HttpPost("userlogin")]
        public IActionResult ExistingUser(LogUser ExistingUser)
        {
            if(ModelState.IsValid)
            {
                User newUsers = _context.Users.FirstOrDefault(o => o.Email == ExistingUser.lEmail);
                if(newUsers == null)
                {
                    return View("Index");
                }
                HttpContext.Session.SetInt32("UserID", newUsers.UserId);
                return RedirectToAction("dashboard");
            }
            return View("Index");
        }

        // ++++++++++++++++++++++
        //        Add User
        // ++++++++++++++++++++++

        [HttpPost("adduser")]
        public IActionResult AddUser(User NewUser)
        {
            if(ModelState.IsValid)
            {
                // 1 - Hasshing the password
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                NewUser.Password = Hasher.HashPassword(NewUser, NewUser.Password);
                
                // 2 - add to the database
                _context.Users.Add(NewUser);
                _context.SaveChanges();

                // 3 - Put id in session
                User newUsers = _context.Users.FirstOrDefault(o => o.Email == NewUser.Email);
                HttpContext.Session.SetInt32("UserID", newUsers.UserId);
                return RedirectToAction("dashboard");
            }
            return View("Index");
        }

        // ++++++++++++++++++++++
        //      Logout
        // ++++++++++++++++++++++

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        
        // ++++++++++++++++++++++
        //      Add Guess
        // ++++++++++++++++++++++

        [HttpGet("addguess/{WeddingID}")]
        public IActionResult AddGuess(int WeddingID)
        {
            // int UserId = (int)  HttpContext.Session.GetInt32("UserID");
            Guess NewGuess = new Guess();
            NewGuess.UserId = (int)  HttpContext.Session.GetInt32("UserID");
            NewGuess.WeddingId = WeddingID;
            _context.Guesses.Add(NewGuess);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }


        // ++++++++++++++++++++++
        //      Dashboard
        // ++++++++++++++++++++++
        
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            int? checkIds = HttpContext.Session.GetInt32("UserID");
            if(checkIds == null)
            {
                return View("Index");
            }
            ViewBag.AllWedding = _context.Weddings.Include(d => d.GuessI).ToList();
            ViewBag.UserID = (int)  HttpContext.Session.GetInt32("UserID");
            return View("Dashboard");
        }

        // ++++++++++++++++++++++
        //      Add Wedding
        // ++++++++++++++++++++++

        // 1 - View Wedding

        [HttpGet("newwedding")]
        public IActionResult newWedding()
        {
            return View("AddWedding");
        }

        // 2 - ad wedding

        [HttpPost("addwedding")]
        public IActionResult AddWedding(Wedding NewWedding)
        {
            if(ModelState.IsValid)
            {
                NewWedding.UserId = (int) HttpContext.Session.GetInt32("UserID");
                _context.Weddings.Add(NewWedding);
                _context.SaveChanges();
                return RedirectToAction("dashboard");
            }
            return View("AddWedding");
        }

        // ++++++++++++++++++++++
        //      View Wedding
        // ++++++++++++++++++++++

        [HttpGet("view/{WeddingID}")]
        public IActionResult ViewWedding(int WeddingID)
        {
            // ViewBag.AllWedding = _context.Weddings.FirstOrDefault(p => p.WeddingId == WeddingID);
            Wedding SelectWedding = _context.Weddings.Include(v => v.GuessI).ThenInclude(f => f.UserI).FirstOrDefault(p => p.WeddingId == WeddingID);
            return View(SelectWedding);
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
