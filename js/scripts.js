
$(function(){
	var menu = $('#menu');
	var menuPositionTop = menu.position().top;
	
	$(window).scroll(function () {
		if(parseInt($(window).scrollTop()) > menuPositionTop) {

			if (menu.hasClass('static')) { 
				menu.removeClass('static').addClass('fixed'); 
			}
		} else {

		if (menu.hasClass('fixed')) {
			menu.removeClass('fixed').addClass('static');
			}
		}
	});
});
		
$(function() { 
	var nav = document.getElementById("menu");
	var high = nav.offsetHeight;
	
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
			scrollTop: target.offset().top - high
			}, 2000);
		}
	});
});

$(function() {
	$("#more-btn").click(function(e){
		if($(this).hasClass('detal2')){
			$(this).removeClass('detal2').addClass('detal');
			$(this).text('(mniej)');
		} else {
			$(this).removeClass('detal').addClass('detal2');
			$(this).text('(więcej)');
		}
	});
});		

			
$(document).ready(function(){
	$('#menu-btn').click(function(){
		$('#nav-icon1').toggleClass('open');
	});
});
			
$(document).ready(function() {
	$('#about-btn, #mission-btn, #gallery-btn, #prices-btn, #contact-btn').click(function() {
		$('#nav-icon1').toggleClass('open');
	});
});