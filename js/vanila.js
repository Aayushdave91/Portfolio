$(document).ready(function(){
    $(".them-changer").click(function(){
        $(".them").toggleClass("d-flex");
    });
    $(".grey-them-button").click(function(){
        var color="grey"
        $("#them-changer").attr("href","css/"+color+".css")
    })
    $(".green-them-button").click(function(){
        var color="green"
        $("#them-changer").attr("href","css/"+color+".css")
    })
    $(".yellow-them-button").click(function(){
        var color="yellow"
        $("#them-changer").attr("href","css/"+color+".css")
    })
    $(".none-them-button").click(function(){
        var color="style"
        $("#them-changer").attr("href","css/"+color+".css")
    });
});
