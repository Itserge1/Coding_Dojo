using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductCategories.Controllers
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

        // +++++++++++++++++++++++++++++
        //         ADD PRODUCT
        // +++++++++++++++++++++++++++++

        // 1 - View Page
        
        [HttpGet("products")]
        public IActionResult Products()
        {
            ViewBag.AllProduct = _context.Products.ToList();
            return View("AddProduct");
        }

        // 2- Adding Product to the database

        [HttpPost("addproduct")]
        public IActionResult Addproduct(Product NewProduct)
        {
            if(ModelState.IsValid)
            {
                _context.Products.Add(NewProduct);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AllProduct = _context.Products.ToList();
            return View("AddProduct");
        }

        // +++++++++++++++++++++++++++++
        //      ADD CATEGORIES
        // +++++++++++++++++++++++++++++

        // 1 - View Page

        [HttpGet("categories")]
        public IActionResult Categories()
        {
            ViewBag.AllCategories = _context.Categories.ToList();
            return View("AddCategory");
        }

        // 2 - Adding to the Database

        [HttpPost("addcategory")]
        public IActionResult Addcategory(Category NewCategory)
        {
            if(ModelState.IsValid)
            {
                _context.Categories.Add(NewCategory);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.AllCategories = _context.Categories.ToList();
            return View("AddCategory");
        }

        // +++++++++++++++++++++++++++++
        // SEE PRODUCT/  ASSING CATEGORY
        // +++++++++++++++++++++++++++++
        
        // 1 - See Category and product
        [HttpGet("products/{productId}")]
        public IActionResult OneProduct(int productId)
        {
            Product First = _context.Products.Include(f => f.Seller).ThenInclude(g => g.Category).FirstOrDefault(p => p.ProductId == productId);
            ViewBag.AllCategories = _context.Categories.ToList();
            return View(First);
        }

        // 2 - Assingin Category
        [HttpPost("addToStore")]
        public IActionResult AddToStore(Store NewPCLink)
        {
            _context.Add(NewPCLink);
            _context.SaveChanges();
            return Redirect($"products/{NewPCLink.ProductId}");
        }

        // +++++++++++++++++++++++++++++
        // SEE CATEGORY/ ASSING PRODUCT
        // +++++++++++++++++++++++++++++

        // 1 - Veiw Page
        [HttpGet("category/{categoryId}")]
        public IActionResult OneCategory(int categoryId)
        {
            Category Second = _context.Categories.Include(f => f.Seller).ThenInclude(g => g.Product).FirstOrDefault(s => s.CategoryId == categoryId);
            ViewBag.AllProduct = _context.Products.ToList();
            return View(Second);
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
