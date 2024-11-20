// Previous js of the template
// window.HELP_IMPROVE_VIDEOJS = false;


// $(document).ready(function() {
//     // Check for click events on the navbar burger icon

//     var options = {
// 			slidesToScroll: 1,
// 			slidesToShow: 1,
// 			loop: true,
// 			infinite: true,
// 			autoplay: false,
// 			autoplaySpeed: 30000,
//     }

// 		// Initialize all div with carousel class
//     var carousels = bulmaCarousel.attach('.carousel', options);
	
//     bulmaSlider.attach();

// })

document.addEventListener('DOMContentLoaded', () => {
	const carousel = document.querySelector('#text-carousel');
	const items = carousel.querySelectorAll('.item');
	const prevButton = document.querySelector('.carousel-nav.prev');
	const nextButton = document.querySelector('.carousel-nav.next');
	
	let currentIndex = 0;
  
	function updateCarousel() {
	  items.forEach((item, index) => {
		item.style.display = index === currentIndex ? 'block' : 'none';
	  });
	}
  
	prevButton.addEventListener('click', () => {
	  currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
	  updateCarousel();
	});
  
	nextButton.addEventListener('click', () => {
	  currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
	  updateCarousel();
	});
  
	// Initialize
	updateCarousel();
  });
  