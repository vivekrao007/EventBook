using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventBook.Controllers
{

    public class HomeController : Controller
    {
        [Route("Home")]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Sports()
        {
            ViewBag.Message = "Sports";

            return View();
        }
        public ActionResult Movies()
        {
            ViewBag.Message = "Movies";

            return View();
        }
        public ActionResult FoodDrink()
        {
            ViewBag.Message = "Foods and drinks";

            return View();
        }
        public ActionResult Music()
        {
            ViewBag.Message = "Music";

            return View();
        }
        public ActionResult Comedy()
        {
            ViewBag.Message = "Comedy";

            return View();
        }
        public ActionResult EventDisplay(int? id)
        {
            
            Session["eventid"] = id;
            return View();
        }
        public ActionResult Booking(int? id)
        {

            Session["eventid"] = id;
            return View();
        }
        public ActionResult Demo() {

            return View();
        }
        
    }
}