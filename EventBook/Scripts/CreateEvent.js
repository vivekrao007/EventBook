$(function () {
    $("#dateId").datepicker({ dateFormat: "dd/mm/yy", minDate: 0, maxDate: "+2M" });
});

$("#b1").click(function () {
    var p;
    var fileUpload = $("#Poster").get(0);
    var files = fileUpload.files;
    var fileData = new FormData();
    // Looping over all files and add it to FormData object
    for (var i = 0; i < files.length; i++) {
        fileData.append(files[i].name, files[i]);
    }

    $.ajax({
        url: '/Event/upLoadImage',
        type: 'Post',
        data: fileData,
        async: false,
        dataType: "json",
        contentType: false, // Not to set any content header
        processData: false, // Not to process data
        success: (function (data_img) {
            var Email = $('#sessionDivision').val();
            
            var x =
            {
                email: Email
            };
            var data_emi = JSON.stringify(x);
            $.ajax({
                url: '/etoid',
                type: 'Post',
                data: data_emi,
                async: false,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: (function (data) {
                   
                    var xx = data;

                    var dt = $('#dateId').val().split("/");
                    var fail = new Date(dt[2], dt[1] - 1, dt[0]);
                  
                    var rec = {
                        Category: $('#Category').val(),
                        Date: fail.toLocaleDateString(),
                        Description: $('#Desc').val(),
                        EventId: 0,
                        EventName: $('#EventName').val(),
                        Location: $('#Location').val(),
                        price: $('#Price').val(),
                        Poster: data_img.path,
                        UserId: xx.UserId,
                        Tickets:$('#Tickets').val()
                    };

                    var data1 = JSON.stringify(rec);
                   
                    $.ajax({
                        url: '/api/EventsTables',
                        cache: false,
                        type: 'Post',
                        async:false,
                        data: data1,
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json',
                        success: (alert("event created"))
                    });
                })
            });
        })
    });
});

