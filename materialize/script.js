
$(document).ready(function () {
    console.log("document ready");
    $('.scrollspy').scrollSpy();

    $(".thumbnail").mouseover(function () {

        $(".thumbnail").removeClass("brighten");
        $(this).addClass("enlarge");
        $(this).attr("id", "immune");
        $(".thumbnail:not(#immune)").addClass("fade");

    })

    $(".thumbnail").mouseout(function () {
        $(this).addClass("deflate");
        $(".thumbnail").addClass("brighten");
        $(this).removeClass("enlarge");
        function deflate() {
            $(".deflate").removeClass("deflate")
        }
        setTimeout(deflate, 500);
        $(this).attr("id", "");
        $(".thumbnail").removeClass("fade");

    })

});