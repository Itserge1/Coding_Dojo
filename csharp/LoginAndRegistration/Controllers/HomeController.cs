using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LoginAndRegistration.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;



namespace LoginAndRegistration.Controllers
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
            return View();
        }

        // ++++++++++++++++++++++++
        //     SUCCESS ROUTE
        // ++++++++++++++++++++++++

        [HttpGet ("success")]
        public IActionResult Success()
        {
            // string checkId = HttpContext.Session.GetString("newUserId");
            string checkIds = HttpContext.Session.GetString("ExistingUserId");
            if( checkIds == null)
            {
                return View("Index");
            }
            return View("Success");
        }

        // ++++++++++++++++++++++++
        //     SUCCESS2 ROUTE
        // ++++++++++++++++++++++++

        [HttpGet ("successR")]
        public IActionResult SuccessR()
        {
            string checkId = HttpContext.Session.GetString("newUserId");
            if( checkId == null)
            {
                return View("Index");
            }
            return View("Success");
        }
        // ++++++++++++++++++++++++
        //     PROCESS ROUTE
        // ++++++++++++++++++++++++

        [HttpPost ("register")]
        public IActionResult Register(User newUser)
        {
            if(ModelState.IsValid)
            {
                // Check for Existing users
                if(_context.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in use");
                    return View("Index");
                }
                // Hah The Password only after verifying if everting is good to go
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                _context.Add(newUser);
                // Don't forget to save
                _context.SaveChanges();
                User newUsers = _context.Users.FirstOrDefault(u => u.Email == newUser.Email);
                HttpContext.Session.SetString("newUserId", $"{newUsers.UserId}");
                return RedirectToAction("successR");
            }
            else
            {
                return View("Index");
            }
        }
        // ++++++++++++++++++++++++
        //     PROCESS ROUTE
        // ++++++++++++++++++++++++
        [HttpPost("login")]
        public IActionResult Login(LogUser logUser)
        {
            if(ModelState.IsValid)
            {
                // check for an existing User to let him in or not
                User userinDb = _context.Users.FirstOrDefault(u => u.Email == logUser.lEmail);
                // When we search using FirstOrDefault, if nothing comes back then we get null, 
                // but if we find something, we get back a user object.
                if(userinDb == null){
                    ModelState.AddModelError("lEmail", "Invalid Login attempt");
                    return View("Index");
                }
                PasswordHasher<LogUser> Hasher = new PasswordHasher<LogUser>();
                PasswordVerificationResult result = Hasher.VerifyHashedPassword(logUser, userinDb.Password, logUser.lPassword);
                // When this verification is done , it will pass either 1 or 0. 1 mean successfull, 0 mean failure
                if (result == 0)
                {
                    // password was wrong
                    ModelState.AddModelError("lEmail", "Invalid Login attempt");
                    return View("Index");
                }
                HttpContext.Session.SetString("ExistingUserId", $"{userinDb.UserId}");
                return RedirectToAction("Success");
            }
            else
            {
                return View("Index");
            }
        }

        // ++++++++++++++++++++++++
        //     LOGOUT ROUTE
        // ++++++++++++++++++++++++

        [HttpGet ("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return View("Index");
        
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
