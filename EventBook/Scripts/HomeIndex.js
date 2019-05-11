
$('.imgContain').on("click", "img", function () {
    var l;
  
    var x = this.id;
    $.ajax({
        url: "/api/EventsTables/" + x,
        type: "Get",

        dataType: "json",
        contentType: false,
        processData: false,
        success: function (data) {
            var k = data.EventName;
            l = data.EventId;
            // @*window.location.href = "@Url.Action("Eventdisplay","Home")";*@
            // @*window.location.href = "@Url.Action("Eventdisplay", "Home", new {id=Model.})";*@
            window.location.href = 'Home/EventDisplay?id=' + l;
        }
    });
});
            $(window).load(function () {
                $.ajax({

                    url: "/api/EventsTables",
                    type: "Get",

                    dataType: "json",
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        var d = new Date();

                        $.each(data['$values'], function (key, item) {
                             var sunday = new Date();
                            var sunDay = 0;
                          
                            sunday.setDate(sunday.getDate() + ((7 - sunday.getDay()) + sunDay) % 7);
                            if (item.Date >= (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate()) + "T00:00:00") && item.Date <= (sunday.getFullYear() + "-" + (sunday.getMonth() + 1) + "-" + (sunday.getDate()) + "T00:00:00")) {
                               
                                var x = '/imgs/';
                                var path = x + item.Poster;
                                var z = path;
                                var imagex = $('<img />')
                                     .attr('src', path)         // ADD IMAGE PROPERTIES.
                                         .attr('id', item.EventId)

                                         .width('113px').height('113px');
                                
                                var x = '<div class="col-md-4"><li class="card-list-item imgContain" data-reactid="373"><div class="event-card " data-reactid="374"><a class=""  data-reactid="375"><div class="event-card-image " data-reactid="376"><img src="' + path + '"id="' + item.EventId + '"alt="Leela Fireworks - Thursday Live!" srcset="" data-reactid="378" /><span class="card-genre" style="background-color:#7b2346;" data-reactid="380">Sports</span></div><div class="event-card-details " data-reactid="384"><div class="event-card-name" data-reactid="385"><span class="event-card-name-string " data-reactid="386">' + item.EventName + '</span></div><span class="event-card-date " data-reactid="387">' + item.Date + '</span><span class="event-card-venue " data-reactid="388">' + item.Location + '</span><span class="event-card-price  " data-reactid="389">' + item.price + '</span></div></a></div></li>';


                                $('#imgs').html(x);
                                
                                }

                                });
                            }
                        });
                    });
               
        
       
                $('.imgContain').on("click", "img", function () {
            
                    var l;
                    
                    var y = this.id;
                   
                    if (y == "today") {
                        $('#imgs').hide();
                        $('#tomorrowimgs').hide();
                        $('#weekendimgs').hide();
                        $.ajax({

                            url: "/api/EventsTables",
                            type: "Get",

                            dataType: "json",
                            contentType: false,
                            processData: false,
                            success: function (data) {
                                var d = new Date();

                                $.each(data['$values'], function (key, item) {
                                    
                         
                                    if (item.Date == (d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "T00:00:00")) {
                                       
                                
                                        var x = '/imgs/';
                                        var path = x + item.Poster;
                                        var z = path;


                                        //$("#image").attr("src", path);
                                        var imagex = $('<img />')
                                             .attr('src', path)         // ADD IMAGE PROPERTIES.
                                                 .attr('id', item.EventId)

                                                 .width('113px').height('113px');
                                        //var str = '<div class="col-md-4"><div class="card" id="' + item.EventId + '"style="border: thin solid black"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:348px;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + item.Date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.location + '<p class="card-text"><small class="text-muted"><br />' + + '</small></p></div></div>';

                                            //@*<div class="event-card-action" data-reactid="381">
                                       // <span class="event-card-button" data-reactid="382">BUY</span>
                                    //</div>*@
                                            var x = '<div class="col-md-4"><li class="card-list-item imgContain" data-reactid="373"><div class="event-card " data-reactid="374"><a class=""  data-reactid="375"><div class="event-card-image " data-reactid="376"><img src="' + path + '"id="' + item.EventId + '"alt="Leela Fireworks - Thursday Live!" srcset="" data-reactid="378" /><span class="card-genre" style="background-color:#7b2346;" data-reactid="380">Sports</span></div><div class="event-card-details " data-reactid="384"><div class="event-card-name" data-reactid="385"><span class="event-card-name-string " data-reactid="386">' + item.EventName + '</span></div><span class="event-card-date " data-reactid="387">' + item.Date + '</span><span class="event-card-venue " data-reactid="388">' + item.Location + '</span><span class="event-card-price  " data-reactid="389">' + item.price + '</span></div></a></div></li>';


                                            $('#todayimgs').append(x);
                                            $('.imgContain').on("click", "img", function () {
                                                var l;
                                                //alert(this.id);
                                                var x = this.id;
                                                $.ajax({
                                                    url: "/api/EventsTables/" + x,
                                                    type: "Get",

                                                    dataType: "json",
                                                    contentType: false,
                                                    processData: false,
                                                    success: function (data) {
                                                        var k = data.EventName;
                                                        l = data.EventId;
                                                        // @*window.location.href = "@Url.Action("Eventdisplay","Home")";*@
                                                        // @*window.location.href = "@Url.Action("Eventdisplay", "Home", new {id=Model.})";*@
                                                        window.location.href = 'Home/EventDisplay?id=' + l;
                                                    }
                                                });
                                            });
                                            }

                                            });
                                    }
                                });
                                $('#todayimgs').show();
                            }
                        else if (y == "tomorrow") {
                            $('#imgs').hide();
                            $('#todayimgs').hide();
                            $('#weekendimgs').hide();
                            $.ajax({

                                url: "/api/EventsTables",
                                type: "Get",
                                async:"false",
                                dataType: "json",
                                contentType: false,
                                processData: false,
                                success: function (data) {
                                    var d = new Date();

                                    $.each(data['$values'], function (key, item) {
                                        //alert(item.Date+" "+ (d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "T00:00:00"));
                         
                                        if (item.Date == (d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate()+1) + "T00:00:00")) {
                                            alert("Ok");
                                
                                            var x = '/imgs/';
                                            var path = x + item.Poster;
                                            var z = path;


                                            //$("#image").attr("src", path);
                                            var imagex = $('<img />')
                                                 .attr('src', path)         // ADD IMAGE PROPERTIES.
                                                     .attr('id', item.EventId)

                                                     .width('113px').height('113px');
                                            //var str = '<div class="col-md-4"><div class="card" id="' + item.EventId + '"style="border: thin solid black"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:348px;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + item.Date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.location + '<p class="card-text"><small class="text-muted"><br />' + + '</small></p></div></div>';

                                                //@*<div class="event-card-action" data-reactid="381">
                                           // <span class="event-card-button" data-reactid="382">BUY</span>
                                        //</div>*@
                                                var x = '<div class="col-md-4"><li class="card-list-item imgContain" data-reactid="373"><div class="event-card " data-reactid="374"><a class=""  data-reactid="375"><div class="event-card-image " data-reactid="376"><img src="' + path + '"id="' + item.EventId + '"alt="Leela Fireworks - Thursday Live!" srcset="" data-reactid="378" /><span class="card-genre" style="background-color:#7b2346;" data-reactid="380">Sports</span></div><div class="event-card-details " data-reactid="384"><div class="event-card-name" data-reactid="385"><span class="event-card-name-string " data-reactid="386">' + item.EventName + '</span></div><span class="event-card-date " data-reactid="387">' + item.Date + '</span><span class="event-card-venue " data-reactid="388">' + item.Location + '</span><span class="event-card-price  " data-reactid="389">' + item.price + '</span></div></a></div></li>';


                                                $('#tomorrowimgs').append(x);
                                                $('.imgContain').on("click", "img", function () {
                                                    var l;
                                                    //alert(this.id);
                                                    var x = this.id;
                                                    $.ajax({
                                                        url: "/api/EventsTables/" + x,
                                                        type: "Get",

                                                        dataType: "json",
                                                        contentType: false,
                                                        processData: false,
                                                        success: function (data) {
                                                            var k = data.EventName;
                                                            l = data.EventId;
                                                            // @*window.location.href = "@Url.Action("Eventdisplay","Home")";*@
                                                            // @*window.location.href = "@Url.Action("Eventdisplay", "Home", new {id=Model.})";*@
                                                            window.location.href = '/Home/EventDisplay?id=' + l;
                                                        }
                                                    });
                                                });
                                                }

                                                });
                                        }
                                    });
                                    $('#tomorrowimgs').show();
                                }
                            else if (y == "weekend") {
                                $('#imgs').hide();
                                $('#todayimgs').hide();
                                $('#tomorrowimgs').hide();
                                $.ajax({

                                    url: "/api/EventsTables",
                                    type: "Get",
                                    async:"false",
                                    dataType: "json",
                                    contentType: false,
                                    processData: false,
                                    success: function (data) {
                                        var d = new Date();

                                        $.each(data['$values'], function (key, item) {
                                            //alert(item.Date+" "+ (d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + "T00:00:00"));
                                            var satDay = 6;
                                            var sat = new Date();
                                            var sunday = new Date();
                                            var sunDay = 0;
                                            //or any date you calculate from
                                            sat.setDate(sat.getDate() + ((7 - sat.getDay()) + satDay) % 7);
                                            sunday.setDate(sunday.getDate() + ((7 - sunday.getDay()) + sunDay) % 7);
                                            //alert(weekend + " " + weekend.getDate() + " " + weekend.getDay());
                                            if (item.Date == (sat.getFullYear() + "-" + (sat.getMonth() + 1) + "-" + (sat.getDate() ) + "T00:00:00") || item.Date == (sunday.getFullYear() + "-" + (sunday.getMonth() + 1) + "-" + (sunday.getDate()) + "T00:00:00")) {
                                                //alert("Ok Weekend");
                                
                                                var x = '/imgs/';
                                                var path = x + item.Poster;
                                                var z = path;


                                                //$("#image").attr("src", path);
                                                var imagex = $('<img />')
                                                     .attr('src', path)         // ADD IMAGE PROPERTIES.
                                                         .attr('id', item.EventId)

                                                         .width('113px').height('113px');
                                                //var str = '<div class="col-md-4"><div class="card" id="' + item.EventId + '"style="border: thin solid black"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:348px;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + item.Date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.location + '<p class="card-text"><small class="text-muted"><br />' + + '</small></p></div></div>';

                                                   // @*<div class="event-card-action" data-reactid="381">
                                               // <span class="event-card-button" data-reactid="382">BUY</span>
                                           // </div>*@
                                                    var x = '<div class="col-md-4"><li class="card-list-item imgContain" data-reactid="373"><div class="event-card " data-reactid="374"><a class=""  data-reactid="375"><div class="event-card-image " data-reactid="376"><img src="' + path + '"id="' + item.EventId + '"alt="Leela Fireworks - Thursday Live!" srcset="" data-reactid="378" /><span class="card-genre" style="background-color:#7b2346;" data-reactid="380">Sports</span></div><div class="event-card-details " data-reactid="384"><div class="event-card-name" data-reactid="385"><span class="event-card-name-string " data-reactid="386">' + item.EventName + '</span></div><span class="event-card-date " data-reactid="387">' + item.Date + '</span><span class="event-card-venue " data-reactid="388">' + item.Location + '</span><span class="event-card-price  " data-reactid="389">' + item.price + '</span></div></a></div></li>';


                                                    $('#weekendimgs').append(x);
                                                    }

                                                    });
                                            }
                                        });
                                $('#weekendimgs').show();
                                $('.imgContain').on("click", "img", function () {
                                    var l;
                                    //alert(this.id);
                                    var x = this.id;
                                    $.ajax({
                                        url: "/api/EventsTables/" + x,
                                        type: "Get",

                                        dataType: "json",
                                        contentType: false,
                                        processData: false,
                                        success: function (data) {
                                            var k = data.EventName;
                                            l = data.EventId;
                                            // @*window.location.href = "@Url.Action("Eventdisplay","Home")";*@
                                            // @*window.location.href = "@Url.Action("Eventdisplay", "Home", new {id=Model.})";*@
                                            window.location.href = 'Ho/EventDisplay?id=' + l;
                                        }
                                    });
                                });
                                    }

               
                                });
                               