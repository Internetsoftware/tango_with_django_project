$(document).ready(function(){
    alert("hello,world");

    $('#about-btn').click(function(){
        alert("you clicked the button using JQuery!");
    });
    $('.ouch').click(function(){
    alert("you clicked me!ouch!");
    });
    $('p').hover(
        function(){
            $(this).css('color', 'red');
            },
            function(){
            $(this).css('color', 'black');
    });
    $('#about-btn').click(function(){
        msgStr = $('#msg').html()
        msgStr = msgStr + "ooo, fancy!"
        $("#msg").html(msgStr)
    });
});