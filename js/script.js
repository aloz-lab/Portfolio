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
        //$(".toggle .label .ball").css("left", "34px");
        //$(".toggle").addClass("night");
    } else {
        //$(".toggle .label .ball").css("left", "5px");
    }

    $("#dark-mode").on("click", function() {
        if (!$("body").hasClass("dark")) {
            $("body").addClass("dark");
            //$('input[type="checkbox"]').attr("checked", "checked");
            //$(".toggle .checkbox:checked + .label .ball").css("transform", "translateX(29px)");
            //$(".toggle").addClass("night");
            localStorage.setItem("darkMode", "true");
        } else {
            $("body").removeClass("dark");
            //$('input[type="checkbox"]').removeAttr("checked");
            //$(".toggle .checkbox .label .ball").css("transform", "translateX(0px)");
            //$(".toggle").removeClass("night");
            localStorage.setItem("darkMode", "null");
        }  
    });

    //localStorage.removeItem("darkMode");

});