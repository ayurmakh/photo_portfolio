$('.main__nav__element').on('click', function() {
	console.log(123);
	$('.main__nav__element__active').removeClass('main__nav__element__active');
	$(this).addClass('main__nav__element__active');
});

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 51.811234, lng: 107.598114},
		zoom: 17
	});
}
    