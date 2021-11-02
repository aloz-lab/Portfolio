$(document).ready(function() {   

    /******* NAVBAR RESPONSIVE *******/

    $(".topbar_burger").click(function(e) {
        $("#topbar").addClass(" responsive");
        $(".topbar-nav").slideToggle("slow", function() {
            $(".topbar_burger").hide();
            $(".topbar_cross").show();
        });
        $(".topbar_cross").attr("aria-expanded", "true");
    });
    
    $(".topbar_cross").click(function(e) {
        e.preventDefault();
        $(".topbar-nav").slideToggle("slow", function() {
            $(".topbar_cross").hide();
            $(".topbar_burger").show();
            $("#topbar").removeClass(" responsive");
        });
        $(".topbar_burger").attr("aria-expanded", "false");
    });

 
    /******** PORTFOLIO ********/
    
    $(".image").click(function() {
        $(".image").removeClass("image_active");
        $(this).addClass("image_active");
    }); 
    
    /******** PORTFOLIO ACCESSIBILITY ********/
    $(".image-1 a").blur(function() {  
        $(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if (appui == 9) { 
                $(".image-1").removeClass("image_active");
                $(".image-2").addClass("image_active");
                $(".image-2 a").focus();
            }    
        });   
    });

    $(".image-2 a").blur(function() {    
        $(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if (appui == 9) {
                $(".image-2").removeClass("image_active");
                $(".image-3").addClass("image_active");
                $(".image-3 a").focus();
            }
        });   
    });
    
    $(".image-3 a").blur(function() {    
        $(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if (appui == 9) {
                $(".image-3").removeClass("image_active");
                $(".image-4").addClass("image_active");
                $(".image-4 a").focus();
            }
        });   
    });

    $(".image-4 a").blur(function() {    
        $(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if (appui == 9) {
                $(".image-4").removeClass("image_active");
                $(".image-5").addClass("image_active");
                $(".image-5 a").focus();
            }
        });   
    });
    
    $(".image-5 a").blur(function() { 
        $(document).off("keyup");    
    });


    /******* DARK MODE *******/

    let darkMode;

    if (localStorage.getItem("darkMode")) {
        darkMode = localStorage.getItem("darkMode");
    } else {
        darkMode = "null";
    }

    localStorage.setItem("darkMode", darkMode);

    if (localStorage.getItem("darkMode") == "true") {
        $("body").addClass("dark");
    }

    $("#dark-mode").on("click", function() {
        if (!$("body").hasClass("dark")) {
            $("body").addClass("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            $("body").removeClass("dark");
            localStorage.setItem("darkMode", "null");
        }  
    });

});