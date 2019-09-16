$(function () {


    $('#task_1').on('click', function () {
        $.ajax({
            url: "index1.php",
            type: "POST",
            data: {type: 1},
            success: function (data) {
                $('#result').html(data);
            }
        });
    });
    $('#task_2').on('click', function () {
        $.ajax({
            url: "index1.php",
            type: "POST",
            data: {type: 2},
            success: function (data) {
                $('#result').html(data);

            }

        });
    });



});



