window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    // var options = {
	// 		slidesToScroll: 1,
	// 		slidesToShow: 1,
	// 		loop: true,
	// 		infinite: true,
	// 		autoplay: false,
	// 		autoplaySpeed: 20000,
    // }

	// 	// Initialize all div with carousel class
    // var carousels = bulmaCarousel.attach('.carousel', options);
	
    // bulmaSlider.attach();
	bulmaCarousel.attach('#text-carousel', {
		slidesToScroll: 1,
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 20000,
		infinite: true,
	  });

})
