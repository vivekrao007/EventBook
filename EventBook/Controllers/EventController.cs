using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventBook.Controllers
{
    [Authorize]
    public class EventController : Controller
    {
        // GET: Event
        public ActionResult EventCreation()
        {
            return View();
        }
        
        public ActionResult CreateEvent()
        {
            return View();
        }
        public ActionResult EventSucess()
        {
            return View();
        }
        public class Result
        {
            public string path { get; set; }
        }
        [System.Web.Http.HttpPost]
        public string upLoadImage()
        {
            string path = "";

            var file = Request.Files[0];

            var result = new Result();

            if (file != null && file.ContentLength > 0)
            {
                string search = Server.MapPath("~/imgs");
                if (!Directory.Exists(search))
                {
                    Directory.CreateDirectory(search);
                }
                path = Path.Combine(Server.MapPath("~/imgs"),
                                     Path.GetFileName(file.FileName));
                file.SaveAs(path);
                string[] str = path.Split('\\').ToArray();
                int len = str.Length;
                result.path = str[len - 1];
            }
            return JsonConvert.SerializeObject(result);
        }
    }
}