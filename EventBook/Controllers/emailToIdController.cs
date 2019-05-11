using EventBook.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventBook.Controllers
{
    public class emailToIdController : ApiController
    {
        private Entities2 db = new Entities2();
        [HttpPost]
        [Route("etoid")]
        public ClientUser emailToId(emailToIdReturn mod)
        {
            UserManager<ApplicationUser> userManager;
            userManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
            var user = userManager.FindByEmail(mod.email);
            // Ok is a convenience method for returning a 200 Ok response
            ClientUser cUser = new ClientUser(user.Id);
            return cUser;
        }
        [HttpGet]
        [Route("userid")]
        public string UserId()
        {
            string id;
            id = User.Identity.GetUserId();
            return id;
        }
        [HttpGet]
        [Route("usermail")]
        public string UserMail()
        {
            string id;
            id = User.Identity.GetUserName();
            return id;
        }
        public class ClientUser
        {
             public ClientUser(string cUserId)
            {
                UserId = cUserId;
            }
            public string UserId { get; set; }
        }
    }
}
