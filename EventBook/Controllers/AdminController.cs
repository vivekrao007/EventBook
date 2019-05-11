using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventBook.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        public ActionResult AdminLogin()
        {
            try
            {
                return View();
            }
            catch
            {
                return HttpNotFound();
            }
            
        }
        public ActionResult ViewEvents()
        {
            try
            {
                return View();
            }
            catch
            {
                return HttpNotFound();
            }
        }
        public ActionResult AdminEvent(int? id)
        {
            try
            {
                Session["eventid"] = id;
                return View();
            }
            catch
            {
                return HttpNotFound();
            }
           
           
        }
       
    }
}