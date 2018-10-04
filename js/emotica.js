/* global $ google Typed */

$(document).ready(function() {

  $("#emotions").hide();
  $("#emoticaSide").hide();

  var lastScroll = 0;
  var emoticaBrandY = $('#emoticaBrand').position().top;
  
  var options = {
    strings: ["E^500motica"],
    typeSpeed: 600,
    contentType: 'html',
    showCursor: false,
    autoInsertCss: false
  }

  var typed = new Typed("#emoticaBig", options);

  setTimeout(function() { $("#emotions").fadeIn(3000) }, 5500);

  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }
  
  function onResize() {
    
     if ($(window).width() >= 1485) {
      $("#mainText").css("padding-bottom", $(window).height() - $("#crowd").height() -  $("#emoticaFooter").height());
     }
     
     if ($(window).width()<1040) {
       $("#emoticaTopLink").html('<i class="fas fa-angle-up">');
       $("#emoticaSide").css("left","15px");
       $("#emoticaSide").css("width","25px");
     } else {
       $("#emoticaTopLink").html('<i class="fas fa-angle-up"></i>');
       $("#emoticaSide").css("left","15px");
        $("#emoticaSide").css("width","auto");
     }
     if ($(window).width()<815) {
       $("#emoticaSide").hide();
     } else {
       $("#emoticaSide").show();
     }
     
    // if ($(window).height() > $(window).width() ||  $(window).width() <= 1530) {
    //   $("#crowd").height($(window).width()/435*250);
    // }
     
     if ($(window).width() <= 1625) {
       $("#emoticaMap").width($(window).width() / 1625 * 767);
       $("#emoticaMap").height($(window).width() / 1625 * 680);
     }
     
     setupFont();
  } 

  function onScroll() {
    var headerH = $('#crowd').outerHeight(true);
   //this will calculate header's full height, with borders, margins, paddings
   var scrollTopVal = $(this).scrollTop();
    if ( scrollTopVal >= 0  && scrollTopVal + $('#emoticaBig').outerHeight(false)  <= headerH  ) {
        $('#emoticaBrand').css({'position':'fixed','top' :emoticaBrandY});
        $("#navbarTopEmotica").addClass("fixed-top");
        $("#navbarTopEmotica").show();
    } else {
        $('#emoticaBrand').css({'position':'absolute','top':emoticaBrandY});
        $("#navbarTopEmotica").hide();
        $("#navbarTopEmotica").removeClass("fixed-top");
    }
    
    $('#emoticaBig').each(function() {
      if (!$(this).isInViewport()) {
        $("#emoticaSide").show();
      } else {
        $("#emoticaSide").hide();
      }
    });
    
    $("#crowd").each(function() {
      if (!$(this).isInViewport()) {
        $(".nav-link").addClass("redmenu");
      } else {
        $(".nav-link").removeClass("redmenu");
      }
    });
  }
  
  function setupFont() {
    var newSize = Math.round($(window).width() / 1281  *165);
    $("#emoticaBig").css("font-size",newSize+"px");
  }
  
  $(window).on('resize', function() {
    onResize();   
  });

  $(window).on('scroll', function() {
    onScroll();
  });

  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  
  onResize();
  onScroll();
});
