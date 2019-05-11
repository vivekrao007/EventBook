

$(window).load(function () {
    var x;
    //$('#profile').hide();
    $('#event').hide();
    $('#subs').hide();
    $('#edit').hide();
    $('#booking').hide();


    $("#profile-tab").click(function () {
        $('#profile').show();
        $('#event').hide();
        $('#subs').hide();
    });
    $("#event-tab").click(function () {
        $('#profile').hide();
        $('#event').show();
        $('#subs').hide();
        $('#booking').hide();
    });
    $("#book-tab").click(function () {
        $('#profile').hide();
        $('#event').hide();
        $('#subs').hide();
        $('#booking').show();
    });
    $("#subs-tab").click(function () {
        $('#profile').hide();
        $('#event').hide();
        $('#subs').show();
        $('#booking').hide();
    });

    $.ajax({
        url: '/userid',
        type: "Get",

        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {

            var rec = {
                userid: data
            };
            x = JSON.stringify(rec);
           
            $.ajax({
                url: '/api/AspNetUsers/' + data,
                type: "Get",

                dataType: "json",
                contentType: false,
                processData: false,
                success: function (data) {
                  

                    document.getElementById("usermail").innerHTML = data.UserName;
                    document.getElementById("inputEmail").innerHTML = data.UserName;
                    document.getElementById("phoneNumber").innerHTML = data.PhoneNumber;
                    $.ajax({
                        url: "/UserEvents",
                        type: "Post",
                        async: false,
                        dataType: "json",
                        data: x,
                        contentType: 'application/json; charset=utf-8',
                        success: function (data) {
                       
                            $.each(data["$values"], function (key, item) {
                           
                                var img = '/imgs/';
                                var path = img + item.Poster;

                                //$("#image").attr("src", path);
                                var imagex = $('<img />')
                                     .attr('src', path)         // ADD IMAGE PROPERTIES.
                                         .attr('id', item.EventId)

                                         .width('113px').height('113px');
                                var d = new Date(item.Date);

                                var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                                var x = '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"><br/><figure class><div class="card" id="' + item.EventId + '"style="border: thin solid black;width:340px;height:385px"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:337.9px;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.Location + '<h5><b><br />' + 'Rs.' + item.price + '/-' + '</h5></b></p></div></div>';

                                $('#event').append(x);
                            });
                            $('.imgContain').on("click", "img", function () {
                                var l;
                           
                                var id = this.id;
                                $.ajax({
                                    url: "/api/EventsTables/" + id,
                                    type: "Get",

                                    dataType: "json",
                                    contentType: false,
                                    processData: false,
                                    success: function (data) {
                                        var k = data.EventName;
                                        l = data.EventId;
                                   


                                        
                                        window.location.href = 'ManageEvent?id=' + l;
                                    }
                                });
                            });


                            $.ajax({
                                url: "/BookedEvents",
                                type: "Post",
                                async: false,
                                dataType: "json",
                                data: x,
                                contentType: 'application/json; charset=utf-8',
                                success: function (data) {
                                    $.each(data['$values'], function (key, item) {
                                        var eid = item.EventId;
                                        
                                        var rec1 = {
                                            "userid": x,
                                            "cat": " ",
                                            "eventId": eid
                                        }
                                        var y = JSON.stringify(rec1);
                                        $.ajax({
                                            url: "/UserBookedEvents",
                                            type: "Post",
                                            async: false,
                                            dataType: "json",
                                            data: y,
                                            contentType: 'application/json; charset=utf-8',
                                            success: function (data) {

                                                $.each(data['$values'], function (key, item) {
                                                    
                                                    var image = '/imgs/';
                                                    var path = image + item.Poster;

                                                   
                                                    var imagex = $('<img />')
                                                         .attr('src', path)         // ADD IMAGE PROPERTIES.
                                                             .attr('id', item.EventId)

                                                             .width('113px').height('113px');
                                                    var d = new Date(item.Date);
                                                    var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                                                    var x = '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"><br/><figure class><div class="card" id="' + item.EventId + '"style="border: thin solid black;width:340px;height:385px"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:337.9px;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.Location + '<h5><b><br />' + 'Rs.' + item.price + '/-' + '</h5></b></p></div></div>';

                                                    $('#booking').append(x);
                                                });
                                                $('.imgContain').on("click", "img", function () {
                                                    var l;
                                                    
                                                    var Id = this.id;
                                                    $.ajax({
                                                        url: "/api/EventTables/" + Id,
                                                        type: "Get",

                                                        dataType: "json",
                                                        contentType: false,
                                                        processData: false,
                                                        success: function (data) {
                                                            var k = data.EventName;
                                                            l = data.EventId;
                                                          
                                                            window.location.href = 'ManageEvent?id=' + l;
                                                        }
                                                    });

                                                });

                                                $.ajax({
                                                    url: "/SubscribedEvents",
                                                    type: "Post",
                                                    async: false,
                                                    dataType: "json",
                                                    data: x,
                                                    contentType: 'application/json; charset=utf-8',
                                                    success: function (data) {
                                                        $.each(data['$values'], function (key, item) {
                                                            var eid = item.Event_Id;
                                                           

                                                            var rec1 = {
                                                                "userid": x,
                                                                "cat": " ",
                                                                "eventId": eid
                                                            }
                                                            var y = JSON.stringify(rec1);
                                                            $.ajax({
                                                                url: "/UserSubscribedEvents",
                                                                type: "Post",
                                                                async: false,
                                                                dataType: "json",
                                                                data: y,
                                                                contentType: 'application/json; charset=utf-8',
                                                                success: function (data) {

                                                                    $.each(data['$values'], function (key, item) {
                                                                        
                                                                        var image = '/imgs/';
                                                                        var path = image + item.Poster;

                                                                        //$("#image").attr("src", path);
                                                                        var imagex = $('<img />')
                                                                             .attr('src', path)         // ADD IMAGE PROPERTIES.
                                                                                 .attr('id', item.EventId)

                                                                                 .width('113px').height('113px');
                                                                        var d = new Date(item.Date);

                                                                        var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                                                                        var x = '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"><br/><figure class><div class="card" id="' + item.EventId + '"style="border: thin solid black;width:340px;height:385px"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:337.9px;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.Location + '<h5><b><br />' + 'Rs.' + item.price + '/-' + '</h5></b></p></div></div>';

                                                                        $('#subs').append(x);
                                                                    });
                                                                    $('.imgContain').on("click", "img", function () {
                                                                        var l;
                                                                        
                                                                        var Id = this.id;
                                                                        $.ajax({
                                                                            url: "/api/EventTables/" + Id,
                                                                            type: "Get",

                                                                            dataType: "json",
                                                                            contentType: false,
                                                                            processData: false,
                                                                            success: function (data) {
                                                                                var k = data.EventName;
                                                                                l = data.EventId;
                                                                               


                                                                                
                                                                                window.location.href = 'ManageEvent?id=' + l;
                                                                            }
                                                                        });
                                                                       




                                                                    });
                                                                }
                                                            })

                                                        });



                                                    }
                                                });



                                            }
                                        });
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});