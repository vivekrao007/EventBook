//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EventBook.Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    [DataContract(IsReference = true)]
    public partial class SubscriptionTable
    {
        [DataMember]
        public int Subscription_Id { get; set; }
        [DataMember]
        public int Event_Id { get; set; }
        [DataMember]
        public string User_Id { get; set; }
        [DataMember]
        public string Priority { get; set; }
    
        public virtual AspNetUser AspNetUser { get; set; }
        public virtual EventsTable EventsTable { get; set; }
    }
}