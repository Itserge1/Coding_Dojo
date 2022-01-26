using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Exam.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace Exam.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(ILogger<HomeController> logger,  MyContext context)
        {
            _logger = logger;
            _context = context;
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
                // 1 -Find Existing User
                User UserExist = _context.Users.FirstOrDefault(o => o.Email ==  ExistingUser.lEmail);
                if(UserExist == null)
                {
                    ModelState.AddModelError("lEmail", "Invalid login attempt");
                    return View("Index");
                }

                // 2 - Check if the password is correct
                PasswordHasher<LogUser> hasher = new PasswordHasher<LogUser>();
                var result= hasher.VerifyHashedPassword(ExistingUser, UserExist.Password, ExistingUser.lPassword);

                // 3 - If the password is wrong kick them back
                if (result == 0)
                {
                    ModelState.AddModelError("lEmail", "Invalid login attemp");
                    return View("Index");
                }

                // 4 - if the password is right let them through
                User newUsers = _context.Users.FirstOrDefault(o => o.Email == ExistingUser.lEmail);
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
                // 1 - Make Sure the Email is not already in use
                if(_context.Users.Any(o => o.Email == NewUser.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in use!");
                    return View("Index");
                }
                // 2 - Hasshing the password
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                NewUser.Password = Hasher.HashPassword(NewUser, NewUser.Password);
                
                // 3 - add to the database
                _context.Users.Add(NewUser);
                _context.SaveChanges();

                // 4 - Put id in session
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
        //      Dashboard
        // ++++++++++++++++++++++
        
        [HttpGet("dashboard")]
        public IActionResult Dashboard()
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.AllFuntime = _context.Funtimes.Include(d => d.GessesI).Include(d => d.User).OrderByDescending (l => l.Date).ToList();
            ViewBag.UserID = (int)HttpContext.Session.GetInt32("UserID");
            return View("Dashboard");
        }

        // ++++++++++++++++++++++
        //      Add Funtime
        // ++++++++++++++++++++++
        
        //  1 - View Add Funtime page
        [HttpGet("newfuntime")]
        public IActionResult NewFuntime()
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            
            return View("NewFuntime");
        }

        // 2 - Adding Activity to the DataBase
        [HttpPost("addfuntime")]
        public IActionResult AddFuntime(Funtime NewFuntime)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            else if(ModelState.IsValid)
            {
                NewFuntime.UserId = (int)HttpContext.Session.GetInt32("UserID");
                _context.Funtimes.Add(NewFuntime);
                _context.SaveChanges();
                return RedirectToAction("dashboard");
            }
            return View("NewFuntime");
            
        }

        // ++++++++++++++++++++++
        //      View Funtime
        // ++++++++++++++++++++++
        
        //  1 - View  Funtime page
        [HttpGet("Viewfuntime/{FunID}")]
        public IActionResult ViewFuntime(int FunID)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Funtime SelectFuntime = _context.Funtimes.Include(v => v.User).Include(v => v.GessesI).ThenInclude(f => f.UserI).FirstOrDefault(p => p.FuntimeId == FunID);
            ViewBag.UserID = (int)HttpContext.Session.GetInt32("UserID");
            return View(SelectFuntime);
        }
        // ++++++++++++++++++++++
        //      Add Guess
        // ++++++++++++++++++++++

        [HttpGet("addguess/{FuntimeID}")]
        public IActionResult AddGuess(int FuntimeID)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Guess NewGuess = new Guess();
            NewGuess.UserId = (int)HttpContext.Session.GetInt32("UserID");
            NewGuess.FuntimeId = FuntimeID;
            _context.Guesses.Add(NewGuess);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        //  2 - from view page
        [HttpGet("Viewfuntime/addguess/{FuntimeID}")]
        public IActionResult ViewAddGuess(int FuntimeID)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Guess NewGuess = new Guess();
            NewGuess.UserId = (int)HttpContext.Session.GetInt32("UserID");
            NewGuess.FuntimeId = FuntimeID;
            _context.Guesses.Add(NewGuess);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        // ++++++++++++++++++++++
        //      Remove Guess
        // ++++++++++++++++++++++

        [HttpGet("remove/{FuntimeID}")]
        public IActionResult RemoveGuess(int FuntimeID)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Guess RemoveGuess = new Guess();
            RemoveGuess.UserId = (int)HttpContext.Session.GetInt32("UserID");
            RemoveGuess = _context.Guesses.FirstOrDefault(h =>h.UserId == RemoveGuess.UserId);
            _context.Guesses.Remove(RemoveGuess);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        //  2 - from view page
        [HttpGet("Viewfuntime/remove/{FuntimeID}")]
        public IActionResult ViewRemoveGuess(int FuntimeID)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Guess RemoveGuess = new Guess();
            RemoveGuess.UserId = (int)HttpContext.Session.GetInt32("UserID");
            RemoveGuess = _context.Guesses.FirstOrDefault(h =>h.UserId == RemoveGuess.UserId);
            _context.Guesses.Remove(RemoveGuess);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        // ++++++++++++++++++++++
        //      Delete Funtime
        // ++++++++++++++++++++++

        [HttpGet("delete/{FuntimeID}")]
        public IActionResult DeleteFuntime(int FuntimeId)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Funtime DeleteFuntime = new Funtime();
            DeleteFuntime.FuntimeId = FuntimeId;
            DeleteFuntime = _context.Funtimes.FirstOrDefault(h =>h.FuntimeId == DeleteFuntime.FuntimeId);
            _context.Funtimes.Remove(DeleteFuntime);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        //  2 - from view page
        [HttpGet("Viewfuntime/delete/{FuntimeID}")]
        public IActionResult ViewDeleteFuntime(int FuntimeId)
        {
            if( HttpContext.Session.GetInt32("UserID") == null)
            {
                return RedirectToAction("Index");
            }
            Funtime DeleteFuntime = new Funtime();
            DeleteFuntime.FuntimeId = FuntimeId;
            DeleteFuntime = _context.Funtimes.FirstOrDefault(h =>h.FuntimeId == DeleteFuntime.FuntimeId);
            _context.Funtimes.Remove(DeleteFuntime);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
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
