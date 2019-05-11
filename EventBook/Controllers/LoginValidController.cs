using EventBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace EventBook.Controllers
{
    public class LoginValidController : ApiController
    {
        private Entities2 db = new Entities2();
        [ResponseType(typeof(AdminTable))]
        [Route("valid")]
        public IHttpActionResult loginvalid(AdminTable log)
        {
            var a = (from n in db.AdminTables where n.AdminId == log.AdminId && n.AdminPassword == log.AdminPassword && n.AdminName == log.AdminName select n).FirstOrDefault();
            if (a == null)
                return NotFound();
            return Ok(a);
        }
    }
}
