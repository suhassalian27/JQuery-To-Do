//check off items by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){        
        var todoText = $(this).val() //getting text from input
        $(this).val(""); // clear input text        
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
      }
});

$(".fa-plus").click(function()
{
   $("input[type='text']").fadeToggle();
})


//Click on X to delete
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){ //fade effect with functio remove, when fade finishes it removes
        $(this).remove(); });   
    event.stopPropagation();     //stops parent events from firing, ex: here it stops li event
});