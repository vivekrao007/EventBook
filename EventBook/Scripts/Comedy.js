

        $(window).load(function () {
            var rec = {
                cat: "Comedy"
            };
            var x = JSON.stringify(rec);
            $.ajax({
                url: "/ComedyCategory",
                type: "Post",
                async: false,
                dataType: "json",
                data:x,
                contentType: 'application/json; charset=utf-8',
                success: function (data) {
                    $.each(data["$values"], function (key, item) {

                        var x = '/imgs/';
                        var path = x + item.Poster;

                        //$("#image").attr("src", path);
                        var imagex = $('<img />')
                             .attr('src', path)         // ADD IMAGE PROPERTIES.
                                 .attr('id', item.EventId)

                                 .width('113px').height('113px');
                        var d = new Date(item.Date);

                        var date = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();
                        var x = '<div class="col-lg-4 "><br/><figure class><div class="card" id="' + item.EventId + '"style="border: thin solid black;width:100%;height:385px"><img class="card-img-top" id="' + item.EventId + '"src="' + path + '"style="width:100%;height:180px" alt="Card image cap"><div class="card-body"><h4 class="card-title" style="color:black;font-family:"Comic Sans MS";font-size:28px">' + item.EventName + '</h4>&nbsp;<span class="glyphicon glyphicon-calendar"></span>' + date + '<br /><br />&nbsp;<span class="glyphicon glyphicon-map-marker"></span>' + item.Location + '<h5><b><br />' + 'Rs.' + item.price + '/-' + '</h5></b></p></div></div>';

                        $('#comedy').append(x);
                    });
                    $('.imgContain').on("click", "img", function () {
                        var l;
                   
                        var x=this.id;
                        $.ajax({
                            url: "/api/EventsTables/"+x,
                            type: "Get",

                            dataType: "json",
                            contentType: false,
                            processData: false,
                            success: function (data) {
                                var k = data.EventName;
                                l= data.EventId;
                               // @*window.location.href = "@Url.Action("Eventdisplay","Home")";*@
                               // @*window.location.href = "@Url.Action("Eventdisplay", "Home", new {id=Model.})";*@
                                window.location.href = 'EventDisplay?id=' + l;
                            }
                        });
                    });
                }
            });
        });
  
