/**
 * Created by Administrator on 2014/7/9.
 */
function html(s) {return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}
$('.html-line').each(function(){
    $(this).html(html($(this).attr("data-doc").trim()));
});
prettyPrint();