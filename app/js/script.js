$('.main__nav__element').on('click', function() {
	console.log(123);
	$('.main__nav__element__active').removeClass('main__nav__element__active');
	$(this).addClass('main__nav__element__active');
});



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