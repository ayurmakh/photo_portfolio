$('.main__nav__element').on('click', function() {
	console.log(123);
	$('.main__nav__element__active').removeClass('main__nav__element__active');
	$(this).addClass('main__nav__element__active');
});

<<<<<<< HEAD


var target = $('.section__about');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function() {
 	var winScrollTop = $(this).scrollTop();
 	
  	if(winScrollTop > scrollToElem) {
    	$('.scrollup__button__wrapper').removeClass('hidden');
  	}
});
=======
var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.811234, lng: 107.598114},
		zoom: 17
	});
}
    
>>>>>>> f7fea8dae9efb7722db96f22ed5e48bf789dfbac
