$(document).ready(function () {
    console.log("document ready");
    $('.scrollspy').scrollSpy();

    $("#aboutBlock").addClass("flyInLeft");

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 200) {
            $("#portfolioBlock").addClass("flyInRight");
        }
        if (y > 1700) {
            $("#contactBlock").addClass("flyInLeft");
        }
    });

    // $(document).on("click", function() { 
    //     var x = event.clientX;
    //             var y = event.clientY;
    //             console.log(x, y);
    // })

    commentBox();

    function commentBox() {
        $("#commentOpen").on("click", function () {
            var row1 = $("<div class='row not'></div>");
            var row2 = $("<div class='col s12 m5'></div>");
            var row3 = $("<p id='commentInstructions'>Please click on what you want to comment on</p>")
            var row4 = $("<div class='input-field col s12'></div>")
            var appendrow4a = $("<textarea id='textarea2' class='materialize-textarea' data-length='120'></textarea>")
            var appendrow4b = $("<label for='textarea2'>Comment</label>")
            var submitComment = $("<button class='btn waves-effect waves-light' id='commentSubmit' type='submit' name='action'>Submit</button>");
            $("#commentOpen").off("click");
            $(this).parent().append(row1);
            row1.append(row2);
            row2.append(row3);
            $(this).parent().attr("id", "commentBox");
    
            $('html,body').css('cursor','crosshair');
            
            function delay() {
                $(document).one("click", function() {
                    $('html,body').css('cursor','');
                    var x = event.clientX;
                    var y = event.clientY;
                    console.log(x, y);
                    row3.empty();
                    row3.append(row4);
                    row2.append(submitComment);
                    row4.append(appendrow4a);
                    row4.append(appendrow4b);
                    $(document.elementFromPoint(1637, 425)).click();
                    
                    $("#commentSubmit").on("click", function() {
                        var objForBackEnd = {
                            coordinates: (x, y),
                            comment: $("#textarea2").val().trim(),
                        }
                        // ajax post to my API if hooking to db
                        // Can't I write an API that simply posts to my sql database?  Just make a website with a post route? 

                        $("#commentOpen").parent().attr("id", "");
                        $("#commentOpen").parent().children().not("#commentOpen").remove();
                        // recursion:  had to put this entire thing in a function so that initial click handler could be run again/reset
                        commentBox();
                    }
                    )
                });
            }
            
            setTimeout(delay, 100);
            // doing this because the document onclick would fire as soon as the commentopen gets fired
            
        });
    }
    

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
            // function deflate() {
            //     $(".deflate").removeClass("deflate")
            // }
            // setTimeout(deflate, 500);
            $(this).attr("id", "");
            $(".thumbnail").removeClass("fade");
        })
    })

});