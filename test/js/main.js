const albumLength = 516.25;
var currentSlide = 2;
var currentLeft = parseInt($('.schedule-slider').css('margin-left'));

var coll = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.classList.toggle("active");
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 12 + "px";
    } 
  });
}

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    var snaps = $(".snap");
    snaps.each( function() {
        $(this).removeClass("snap");
    });

    $('.scrollable-content').animate({
        scrollTop: $(".scrollable-content").scrollTop() + $($(this).attr('href')).position().top
      },
      500,
      function() {
        snaps.each( function() {
            $(this).addClass("snap");
        });
    });
});

$(document).ready(function() { 
    window.addEventListener("resize", function() {
        $('.schedule-slider').css('margin-left', 'calc(50% + 83.125px + ' + ((2 - currentSlide) * (albumLength + 96.25)) + 'px)');
        currentLeft = parseInt($('.schedule-slider').css('margin-left'));
    });
});

function schedulePrev() {
    if( currentSlide != 1 ) {
        currentLeft += albumLength + 96.25;
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide--;
    }
}

function scheduleNext() {
    if( currentSlide != $('.album').length ) {
        currentLeft += (-albumLength - 96.25);
        $('.schedule-slider').css('margin-left', currentLeft + 'px');
        currentSlide++;
    }
}