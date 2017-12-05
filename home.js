(function(){
	$('#mobile-btn').on('click',function(){
		if($(this).hasClass('icon-BBD-close')){
			$(this).removeClass('icon-BBD-close');
			$(this).addClass('icon-BBD-category');
			$('.menu-mobile')[0].style.left = -260 +'px';
			$('.menu-mobile-mb').removeClass('menu-mobile-on');
			$('body').removeClass('mobile-nav-on');


		}else{
			$(this).removeClass('icon-BBD-category');
			$(this).addClass('icon-BBD-close');
			$('.menu-mobile')[0].style.left = 0 +'px';
			$('.menu-mobile-mb').addClass('menu-mobile-on');
			$('body').addClass('mobile-nav-on');

		}
	});
	$('.menu-mobile-mb').on('click',function(){
		$(this).removeClass('menu-mobile-on');
		$('#mobile-btn').removeClass('icon-BBD-close');
		$('#mobile-btn').addClass('icon-BBD-category');
		$('.menu-mobile')[0].style.left = -260 +'px';
		$('body').removeClass('mobile-nav-on');

	});
})();