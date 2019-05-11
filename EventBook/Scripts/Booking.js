
        var no_of_tickets=1,remain,amount=0;

    $(window).load(function () {
          
        var x = $('#sessionDiv').val();
        $.ajax({

            url: "/api/EventsTables/"+x,
            type: "Get",
            async: false,
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                
                var event_id=data.EventId;
                var eventTickets= data.Tickets;
                $.ajax(
                                {
                                    url:"/api/BookingTables",
                                    type:"Get",
                                    dataType: "json",
                                    async: false,
                                    contentType: false,
                                    processData: false,
                                    success: function (data) {
                                        $.each(data["$values"],function(key,item)
                                        {
                                            if(item.EventId==event_id)
                                            {
                                                
                                                var ticketsBooked=item.NoOfTickets;
                                                    
                                                amount = amount+ticketsBooked;
                                               
                                            }
                                        })
                                        remain= eventTickets-amount;
                                       
                                        ($('#remainTickets')).append('remaining tickets : '+remain+', grab it fast');
                                    }
                                })
                
                var k=data.EventName;
                var l=data.Location;
                var m=data.Date;
                    
                   
                var TotalAmount = data.price;
                var c=data.Category;
                var n=data.price;
                ($('#price')).append(n);
                ($('#EventName')).append(k);
                ($('#venue')).append(l);
                ($('#date')).append(m);

                ($('#category')).append(c);
               
                $('#noOfTickets').change(function(){
                    $('#totalPrice').empty();
                    var price = n;
                    no_of_tickets = parseInt($('#noOfTickets').val());
                        
                       
                    TotalAmount = price*no_of_tickets;
                        
                        
                    ($('#totalPrice')).append('Total Price: '+TotalAmount);
                       
                });

                $('#buy').click(function()
                {

                    $.ajax({
                        url: '/userid',
                        type: "Get",
                        async: false,
                        dataType: "json",
                        contentType: false,
                        processData: false,
                        success: function (data) {
                                
                            var rec = {
                                Ticket_Id: 0,
                                User_Id:data,
                                EventId: event_id,
                                NoOfTickets:  no_of_tickets,
                                Amount:TotalAmount
                            };

                            var data1 = JSON.stringify(rec);

                            $.ajax({
                                url: '/api/BookingTables',
                                cache: false,
                                type: 'Post',
                                async: 'false',
                                data: data1,
                                contentType: 'application/json; charset=utf-8',
                                dataType: 'json',
                                success: function (data) {
                                    alert("Payment Successful");
                                    $.ajax({
                                        url: '/usermail',
                                        type: "Get",
                                        async: false,
                                        dataType: "json",
                                        contentType: false,
                                        processData: false,
                                        success: function (data) {
                                           
                                            var rec = {
                                                Body: "Ticket Confirmed for the Event: " + k + "<br/>" + "Venue: " + l + "<br/>" + "Date: " + m + "<br/>" + "No. of tickets booked: " + no_of_tickets + "<br/>" + "Thanks for approaching us!" + "<br/><br/><br/><br/>" + "Keep Booking,<br/>EventBook Team.",
                                                Destination: data,
                                                Subject: "Confirmation of Ticket"
                                            };

                                            var data1 = JSON.stringify(rec);
                                            $.ajax({
                                                url: '/sendmail',
                                                cache: false,
                                                async: false,
                                                type: 'Post',
                                                data: data1,
                                                contentType: 'application/json; charset=utf-8',
                                                dataType: 'json',
                                                success: (alert("Mail Sent"))
                                            });

                                        }
                                    });

                                }
                            }).fail();

                        }
                    });
                });
            }
        });
    });

 