$('.main__nav__element').on('click', function() {
	console.log(123);
	$('.main__nav__element__active').removeClass('main__nav__element__active');
	$(this).addClass('main__nav__element__active');
});