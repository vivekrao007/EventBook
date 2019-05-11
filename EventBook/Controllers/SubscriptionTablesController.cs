using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EventBook.Models;

namespace EventBook.Controllers
{
    public class SubscriptionTablesController : ApiController
    {
        private Entities2 db = new Entities2();

        // GET: api/SubscriptionTables
        public IQueryable<SubscriptionTable> GetSubscriptionTables()
        {
            return db.SubscriptionTables;
        }

        // GET: api/SubscriptionTables/5
        [ResponseType(typeof(SubscriptionTable))]
        public IHttpActionResult GetSubscriptionTable(int id)
        {
            SubscriptionTable subscriptionTable = db.SubscriptionTables.Find(id);
            if (subscriptionTable == null)
            {
                return NotFound();
            }

            return Ok(subscriptionTable);
        }

        // PUT: api/SubscriptionTables/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubscriptionTable(int id, SubscriptionTable subscriptionTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subscriptionTable.Subscription_Id)
            {
                return BadRequest();
            }

            db.Entry(subscriptionTable).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubscriptionTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SubscriptionTables
        [ResponseType(typeof(SubscriptionTable))]
        public IHttpActionResult PostSubscriptionTable(SubscriptionTable subscriptionTable)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var check = from n in db.SubscriptionTables where n.Event_Id == subscriptionTable.Event_Id && n.User_Id == subscriptionTable.User_Id select n;
                if (check != null)
                {
                    db.SubscriptionTables.Add(subscriptionTable);
                    db.SaveChanges();
                }
                else
                {

                }
                return CreatedAtRoute("DefaultApi", new { id = subscriptionTable.Subscription_Id }, subscriptionTable);

            }
            catch
            {
                return NotFound();
            }
        }

        // DELETE: api/SubscriptionTables/5
        [ResponseType(typeof(SubscriptionTable))]
        public IHttpActionResult DeleteSubscriptionTable(int id)
        {
            SubscriptionTable subscriptionTable = db.SubscriptionTables.Find(id);
            if (subscriptionTable == null)
            {
                return NotFound();
            }

            db.SubscriptionTables.Remove(subscriptionTable);
            db.SaveChanges();

            return Ok(subscriptionTable);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubscriptionTableExists(int id)
        {
            return db.SubscriptionTables.Count(e => e.Subscription_Id == id) > 0;
        }
    }
}