$(".tab-title li").click(function(){
    if(!$(this).hasClass("hover")){
        $(".tab-title li").removeClass("hover");
        $(this).addClass("hover");
    }
});