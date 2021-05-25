$(document).ready(function() {   

        /******* NAVBAR RESPONSIVE *******/
        $(".topbar_burger").click(function(e) {
            $("#topbar").addClass(" responsive");
            $(".topbar-nav").slideToggle("slow", function() {
                $(".topbar_burger").hide();
                $(".topbar_cross").show();
            });
        });
    
        $(".topbar_cross").click(function(e) {
            e.preventDefault();
            $(".topbar-nav").slideToggle("slow", function() {
                $(".topbar_cross").hide();
                $(".topbar_burger").show();
                $("#topbar").removeClass(" responsive");
            });
        });
 
        /******** PORTFOLIO ********/
        $(".image").click(function() {
            $(".image").removeClass("image_active");
            $(this).addClass("image_active");
        });   

        /******* DARK MODE *******/
        $("#dark-mode").on("change", function() {
            $("body").toggleClass("dark");
        });



});