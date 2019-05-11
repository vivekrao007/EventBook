
        $("#Loginbtn").click(function () {
            var rec = {
                AdminId: $('#AId').val(),
                AdminName: $('#AName').val(),
                AdminPassword: $('#APassword').val()
            };
            var x = JSON.stringify(rec);

            $.ajax({
                url: '/valid',
                cache: false,
                type: 'Post',
                //async:false,
                data: x,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: (alert("Login sucessfull"))
            });
        });
  