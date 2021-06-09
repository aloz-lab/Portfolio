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
        /*$("#dark-mode").on("change", function() {
            $("body").toggleClass("dark");
        });*/

    let darkMode;

    if (localStorage.getItem("darkMode")) {
        darkMode = localStorage.getItem("darkMode");
    } else {
        darkMode = "null";
    }

    localStorage.setItem("darkMode", darkMode);

    if (localStorage.getItem("darkMode") == "true") {
        $("body").addClass("dark");
        $(".toggle").addClass("night");
    }

    $("#dark-mode").on("click", function() {
        if (!$("body").hasClass("dark")) {
            $("body").addClass("dark");
            $(".toggle").addClass("night");
            localStorage.setItem("darkMode", "true");
        } else {
            $("body").removeClass("dark");
            $(".toggle").removeClass("night");
            localStorage.setItem("darkMode", "null");
        }  
    });

});