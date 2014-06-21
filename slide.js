$(document).ready( function() {
	var width = 400;
	var slides = $('.slide');
	var slidesLength = slides.length;
	var curPosition = 0;
	
	
	isVisible();
	slides.wrapAll('<div id="slidesHolder"></div>');
	slides.css({'float' : 'left'});
	$('#slidesHolder').css('width', width * slidesLength);
	
	function isVisible() {
		if (curPosition === 0) {
			$('#previous').hide();
		} else { $('#previous').show();}
		
		if (curPosition === (slidesLength - 1)) {
			$('#next').hide();
		} else { $('#next').show(); }
	}
	
	$('#next').click( function() {
		if(curPosition < (slidesLength - 1)) {
			curPosition ++;
		} else {
			curPosition = 0;
		}
		moveSlide();
	});
	
	$('#previous').click( function() {
		if(curPosition > 0) {
			curPosition --;
		} else {
			curPosition = (slidesLength - 1);
		}
		moveSlide();
	});
					
	function moveSlide() {
		$('#slidesHolder').animate( {'marginLeft' : (-curPosition) * width} );
		isVisible();
	}
	
	/*Here are the tablesorter items, had to wrap every tables first tr with thead, and the rest with tbody*/

	
	$('table').tablesorter();
});