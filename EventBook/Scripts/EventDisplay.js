var x = $('#sessionDiv').val();
if ('@Session["email_id"]' =='') {
    $('#subscription').hide();
}
$('#subscription').hide();
$('#ok').hide();
$('#subscribe').val('Subscribe');
$('#subscribe').html('Subscribe');
$.ajax({
    url: "/api/EventsTables/" + x,
    type: "Get",

    dataType: "json",
    contentType: false,
    processData: false,
    success: function (data) {
        var event_id = data.EventId;
        var eventTickets = data.Tickets;
        $.ajax({
            url: "/api/BookingTables",
            type: "Get",
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {
                $.each(data["$values"], function (key, item) {
                    if (item.EventId == event_id) {
                        var ticketsBooked = item.NoOfTickets;
                        amount = amount + ticketsBooked;
                    }
                })
                remain = eventTickets - amount;
                if (remain == 0) {
                    $('#subscribe').hide();
                    $('#booknow').hide();
                    $('#soldout').append('Sold Out');
                }
            }
        });
    }
});
$.ajax({
    url: '/userid',
    type: "Get",

    dataType: "json",
    contentType: false,
    processData: false,
    success: function (data) {


        var rec1 = {
            "userid": data,
            "cat": " ",
            "eventId": x
        }
        var y = JSON.stringify(rec1);

        $.ajax({
            url: "/Unsubscribe",
            type: "Post",
            async: false,
            dataType: "json",
            data: y,
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data.$values[0].Subscription_Id) {
                    $('#subscribe').val('Unsubscribe');
                    $('#subscribe').html('Unsubscribe');
                }
            }
        });
    }
});
$.ajax({
    url: "/api/EventsTables/" + x,
    type: "Get",
    dataType: "json",
    contentType: false,
    processData: false,
    success: function (data) {
        var im = '/imgs/';
        var path = im + data.Poster;
        $("#image").attr("src", path);
        var mi = $('#di')
             .attr('src', path)         // ADD IMAGE PROPERTIES.
                 .attr('id', data.EventId);
        var k = data.EventName;
        var l = data.Location;
        var d = new Date(data.Date);

        var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
        var m = date;
        var n = data.Description;
        var i = data.EventId;
        var j = data.price;
        ($('#para2')).append("  " + k);
        ($('#para3')).append("  " + l);
        ($('#para4')).append("  " + m);
        ($('#para1')).append("  " + n);
        ($('#para5')).append("  " + j);

        $('#subscribe').click(function () {
            if ($('#subscribe').val() == "Subscribe") {
                $('#subscribe').hide();
                $('#subscription').show();
                $('#ok').show();
                $('#close').click(function(){
                    $('#subscribe').show();
                })
                    
                
                $('#ok').click(function () {
                    if ($('#1').is(':checked')) {
                        var priority = $('#1').val();
                    }
                    else if ($('#2').is(':checked')) {
                        var priority = $('#2').val();
                    }
                    else {
                        var priority = $('#3').val();
                    }
                    $.ajax({
                        url: '/userid',
                        type: "Get",
                        dataType: "json",
                        contentType: false,
                        processData: false,
                        success: function (data) {

                            var rec = {
                                Subscription_Id: 0,
                                User_Id: data,
                                Event_Id: x,
                                Priority: priority
                            };
                            var z = JSON.stringify(rec);


                            $.ajax({
                                url: '/api/SubscriptionTables',
                                cache: false,
                                type: 'Post',
                                data: z,
                                contentType: 'application/json; charset=utf-8',
                                dataType: 'json',
                                success: function (data) {
                                    $('#subscribe').val('Unsubscribe');

                                    $('#subscribe').html('Unsubscribe');
                                    $('#subscription').hide();
                                    $('#ok').hide();
                                    $('#subscribe').show();
                                    alert('You Subscribed to this event!!');
                                    alert('Thank You!');
                                    window.location.reload();
                                }
                            });

                        }
                    }).fail();

                });

            }
            else if ($('#subscribe').val() == "Unsubscribe") {
                $('#subscription').hide();
                if (confirm('Do You Want to Unsubscribe?')) {
                    $.ajax({
                        url: '/userid',
                        type: "Get",
                        dataType: "json",
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            var rec1 = {
                                "userid": data,
                                "cat": " ",
                                "eventId": x
                            }
                            var y = JSON.stringify(rec1);
                            $.ajax({
                                url: "/Unsubscribe",
                                type: "Post",
                                async: false,
                                dataType: "json",
                                data: y,
                                contentType: 'application/json; charset=utf-8',
                                success: function (data) {
                                    $.ajax({
                                        url: '/api/SubscriptionTables?id=' + data.$values[0].Subscription_Id,
                                        cache: false,
                                        type: 'DELETE',

                                        contentType: 'application/json; charset=utf-8',
                                        dataType: 'json',
                                        success: function (data) {
                                            $('#subscribe').val('Subscribe');
                                            $('#subscribe').html('Subscribe');

                                            alert('You Unsubscribed to this event!!');
                                            alert('Thank You!');
                                            window.location.reload();
                                        }
                                    });
                                }
                            });

                        }
                    });
                }
                else {
                    window.location.reload();
                    $('#subscribe').val('Subscribe');
                    $('#subscribe').html('Subscribe');
                }
             
            }

        });
    }
});

