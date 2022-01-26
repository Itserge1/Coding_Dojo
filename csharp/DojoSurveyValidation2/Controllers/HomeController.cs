using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DojoSurveyValidation.Models;

namespace DojoSurveyValidation.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        DojoSurvey newSurvey;

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost ("process")]
        public IActionResult Process(DojoSurvey survey )
        {
            newSurvey = survey;
            return RedirectToAction ("Result");
        }

        [HttpGet ("result")]
        public IActionResult Result()
        {
            return View(newSurvey);
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
