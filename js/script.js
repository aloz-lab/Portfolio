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

    /*var image;
    var imageSup;
    var lien;
    var lienSup;
    $(".image").each(function(index) {
        image = ".image-" + (index+1); 
        imageSup = ".image-" + (index+2); 
        lien = image + " a";
        lienSup = imageSup + " a";
        console.log(lien);
        console.log(lienSup);
        $(lien).blur(function() {           
            $(document).keyup(function(touche){
                var appui = touche.which || touche.keyCode;
                if (appui == 9) { 
                    $(image).removeClass("image_active");
                    $(imageSup).addClass("image_active");
                    if (index < 5) {
                        $(lienSup).focus();
                    } else {
                        $(document).off("keyup"); 
                    }    
                }    
            });   
        });
        image = ".image-";
        imageSup = ".image-";
    })*/

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
        /*$(document).keyup(function(touche){
            var appui = touche.which || touche.keyCode;
            if (appui == 9) {
                $(".image-5").removeClass("image_active");
                $(".image-1").addClass("image_active");
            }*/
        $(document).off("keyup");    
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