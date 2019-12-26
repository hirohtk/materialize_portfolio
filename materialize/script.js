
$(document).ready(function() {
    console.log("document ready");
    $('.scrollspy').scrollSpy();
    
    $(".thumbnail").mouseover(function (){

        $(this).addClass("enlarge");
        $(this).attr("id", "immune");
        $(".thumbnail:not(#immune)").addClass("fade");

        //need to mark which were faded 
       
    }) 

    $(".thumbnail").mouseout(function (){
        $(this).addClass("deflate");
        $(this).removeClass("enlarge");

        function deflate() {
            $(".deflate").removeClass("deflate")
        }

        setTimeout(deflate, 500);
        $(this).attr("id", "");
        //$(".fade").css("-webkit-animation:", "lighten 0.5s");
        //$(".fade").css("filter", "brightness(100%)");
        $(".thumbnail").removeClass("fade");
        
    }) 
        
});