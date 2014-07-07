/**
 * Created by Administrator on 2014/7/4.
 */
$(document).ready(function(){
    $(".bs-docs-sidebar").scrollspy();
});

$("a").focus(function(){$(this).blur();});
$(window).scroll(function(){
    if(document.documentElement.scrollTop > 120){
        $(".bs-docs-sidenav").removeClass("affix-top").addClass("affix").css({"top": "70px"});
    }else{
        $(".bs-docs-sidenav").removeClass("affix").addClass("affix-top");
    }
});