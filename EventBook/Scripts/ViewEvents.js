
    //var id = 0;
        $(window).load(function () {

            $.ajax({
                url: '/api/EventsTables',
                type: 'Get',
                dataType: "json",
                contentType: false, // Not to set any content header
                processData: false, // Not to process data
                success: (function (data) {
                    $.each(data["$values"], function (key, item) {
                        if (item.Category == 'Sports')
                            $('#SportsListTable').append('<tr><td>' + item.EventId + '</td>' + '<td>' + item.UserId + '</td>' + '<td>' + item.EventName + '</td>' + '<td>' + item.Location + '</td>' + '<td>' + item.Date + '</td>' + '<td>' + item.price + '</td>' + '<td><input type="button" style="background-color:coral" value="delete" id="' + item.EventId + '" onclick="del(' + item.EventId + ')"> |  <input type="button" style="background-color:lightgreen" value="view" id="' + item.EventId + '" onclick="view(' + item.EventId + ')"></td>');

                        if (item.Category == 'Comedy')
                            $('#ComedyTable').append('<tr><td>' + item.EventId + '</td>' + '<td>' + item.UserId + '</td>' + '<td>' + item.EventName + '</td>' + '<td>' + item.Location + '</td>' + '<td>' + item.Date + '</td>' + '<td>' + item.price + '</td>' + '<td><input type="button" style="background-color:coral" value="delete" id="' + item.EventId + '" onclick="del(' + item.EventId + ')"> |  <input type="button" style="background-color:lightgreen" value="view" id="' + item.EventId + '" onclick="view(' + item.EventId + ')"></td>');

                        if (item.Category == 'Music')
                            $('#MusicTable').append('<tr><td>' + item.EventId + '</td>' + '<td>' + item.UserId + '</td>' + '<td>' + item.EventName + '</td>' + '<td>' + item.Location + '</td>' + '<td>' + item.Date + '</td>' + '<td>' + item.price + '</td>' + '<td><input type="button" style="background-color:coral" value="delete" id="' + item.EventId + '" onclick="del(' + item.EventId + ')"> |  <input type="button" style="background-color:lightgreen" value="view" id="' + item.EventId + '" onclick="view(' + item.EventId + ')"></td>');

                        if (item.Category == 'FoodDrink')
                            $('#FoodDrinkTable').append('<tr><td>' + item.EventId + '</td>' + '<td>' + item.UserId + '</td>' + '<td>' + item.EventName + '</td>' + '<td>' + item.Location + '</td>' + '<td>' + item.Date + '</td>' + '<td>' + item.price + '</td>' + '<td><input type="button" style="background-color:coral" value="delete" id="' + item.EventId + '" onclick="del(' + item.EventId + ')"> |  <input type="button" style="background-color:lightgreen" value="view" id="' + item.EventId + '" onclick="view(' + item.EventId + ')"> </td>');

                        if (item.Category == 'Movies')
                            $('#MoviesTable').append('<tr><td>' + item.EventId + '</td>' + '<td>' + item.UserId + '</td>' + '<td>' + item.EventName + '</td>' + '<td>' + item.Location + '</td>' + '<td>' + item.Date + '</td>' + '<td>' + item.price + '</td>' + '<td><input type="button" style="background-color:coral" value="delete" id="' + item.EventId + '" onclick="del(' + item.EventId + ')"> | <input type="button" style="background-color:lightgreen" value="view" id="' + item.EventId + '" onclick="view(' + item.EventId + ')"> </td>');

                    });
                })
            });
        });
    function del(id) {
        $.ajax({
            url: '/api/EventsTables/' + id,
            cache: false,
            type: 'DELETE',

            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: (function (data) {
                alert("done");
                window.location.href = 'ViewEvents';
            })
        });
    };
    function view(id) {
        window.location.href = 'AdminEvent?id=' + id;
    };

  