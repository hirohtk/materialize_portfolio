$(document).ready(function () {
    console.log("document ready");
    $('.scrollspy').scrollSpy();

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