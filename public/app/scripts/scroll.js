//header hides when user scrolls up
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event) {
	didScroll = true;
});

//run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);
function hasScrolled() {
	//scrollTop is the number that represents the position of the scroll
	//the very top is 0
	var st = $(this).scrollTop();
	if(Math.abs(lastScrollTop - st) <= delta)
        return;
  	// If current position > last position AND scrolled past navbar...
	if (st > lastScrollTop && st > 50){
	  // Scroll Down
	  $('.header').addClass('header-up');
	  $('.navbar-collapse').removeClass('in');
	} else {
      // Scroll Up  
      $('.header').removeClass('header-up'); 
    }
	lastScrollTop = st;
}
