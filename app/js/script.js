$('.main__nav__element').on('click', function() {
	$('.main__nav__element__active').removeClass('main__nav__element__active');
	$(this).addClass('main__nav__element__active');
});

$(window).scroll(function() {	
  	if ($(this).scrollTop() > ($('.section__about').offset().top - $(window).height() + 100)) 
    	$('.scrollup__button__wrapper').removeClass('hidden');


  	if ($(this).scrollTop() <= 100)
  		$('.scrollup__button__wrapper').addClass('hidden');
});

$('.scrollup__button__wrapper').on('click', function() {
	$('html').animate({
		scrollTop: 0
	}, 1000);
});

function initMap() {
	var map;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.811234, lng: 107.598114},
		zoom: 17
	});
}
    
