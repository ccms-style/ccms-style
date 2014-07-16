$(".tab-title li, .tab-btn-title li").click(function(){
    if(!$(this).hasClass("hover")){
        $(this).parent("ul").find("li").removeClass("hover");
        $(this).addClass("hover");
    }
});