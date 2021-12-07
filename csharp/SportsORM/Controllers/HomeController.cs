using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues.Where(l => l.Sport.Contains("Baseball")).ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            // all womens' leagues
            ViewBag.WomenLeagues = _context.Leagues.Where(l => l.Name.Contains("Womens")).ToList();
            // all leagues where sport is any type of hockey
            ViewBag.HockeySport = _context.Leagues.Where(l => l.Sport.Contains("Hockey")).ToList();
            // all leagues where sport is something OTHER THAN football
            ViewBag.NonfootballSport = _context.Leagues.Where(l => l.Sport != "Football").ToList();
            // all leagues that call themselves "conferences"
            ViewBag.Conferences = _context.Leagues.Where(l => l.Name.Contains("Conference")).ToList();
            // all leagues in the Atlantic region
            ViewBag.AtlanticLeagues = _context.Leagues.Where(l => l.Name.Contains("Atlantic")).ToList();
            // all teams based in Dallas
            ViewBag.TeamsLocation = _context.Teams.Where(l => l.Location == "Dallas").ToList();
            // all teams named the Raptors
            ViewBag.TeamsRaptors = _context.Teams.Where(l => l.TeamName == "Raptors").ToList();
            // all teams whose location includes "City"
            ViewBag.IncludeCity = _context.Teams.Where(l => l.Location.Contains("City")).ToList();
            // all teams whose names begin with "T"
            ViewBag.NameStarT = _context.Teams.Where(l => l.TeamName.Substring(0, 1) == "T").ToList();
            // all teams, ordered alphabetically by location
            ViewBag.AllAlphabetic = _context.Teams.OrderBy(l => l.Location).ToList();
            // all teams, ordered DESC by location
            ViewBag.AllDesc = _context.Teams.OrderByDescending(l => l.Location).ToList();
            // every player with last name "Cooper"
            ViewBag.PlayerCooper = _context.Players.Where(l => l.LastName == "Cooper").ToList();
            // every player with first name "Joshua"
            ViewBag.PlayerJoshua = _context.Players.Where(l => l.FirstName == "Joshua").ToList();
            // every player with last name "Cooper" EXCEPT those with "Joshua" as the first name
            ViewBag.PlayerCooperNoJoshua = _context.Players.Where(l => l.LastName == "Cooper" && l.FirstName != "Joshua").ToList();
            // all players with first name "Alexander" OR first name "Wyatt"
            ViewBag.PlayerAlexanderWyatt = _context.Players.Where(l => l.FirstName == "Alexander" || l.FirstName == "Wyatt").ToList();


            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}