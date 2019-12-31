$(document).ready(function () {
    console.log("document ready");
    $('.scrollspy').scrollSpy();

    // $("#aboutBlock").removeClass("hidden");
    // $("#portfolioBlock").removeClass("hidden");
    // $("#contactBlock").removeClass("hidden");

    $("#aboutBlock").addClass("flyInLeft");
    

    // function fadeIn (input) {
    //     var fadeIn = $("'#" + input + "'").fadeIn();
    //     return fadeIn;
    // }

    // function removeHiddenDelay (input) {
    //     var remove = $("'#" + input + "'").fadeIn();
    //     return remove;
    // }

    // fadeIn("aboutBlock");
    // setTimeout(removeHiddenDelay("aboutBlock"), 400);

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        // if (y > 0) {
        //   $('.bottomMenu').fadeIn();
        // } else {
        //   $('.bottomMenu').fadeOut();
        // }
        console.log(y);
        
        if (y > 200) {
            $("#portfolioBlock").addClass("flyInRight");
        }
        if (y > 1700) {
            $("#contactBlock").addClass("flyInLeft");
        }

      });

    $(".thumbnail").mouseover(function () {

        // PROBLEM WAS THAT WHENEVER I MOUSE OVER A CHILD ELEMENT IT MOUSES OUT.  CHANGED TO MOUSELEAVE, THINGS SEEM GOOD!

        $(".thumbnail").removeClass("brighten");
        $(this).addClass("enlarge");
        $(this).attr("id", "immune");
        $(".thumbnail:not(#immune)").addClass("fade");

        $(this).mouseleave(function () {
            //$(this).addClass("deflate");
            $(".thumbnail").addClass("brighten");
            $(this).removeClass("enlarge");
            function deflate() {
                $(".deflate").removeClass("deflate")
            }
            setTimeout(deflate, 500);
            $(this).attr("id", "");
            $(".thumbnail").removeClass("fade");
        })
    })

});