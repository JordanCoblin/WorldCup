$(document).ready( function() {
	var width = 400;
	var slides = $('.slide');
	var slidesLength = slides.length;
	var curPosition = 0;

	isVisible();
	slides.wrapAll('<div id="slidesHolder"></div>');
	slides.css({'float' : 'left'});
	$('#slidesHolder').css('width', slideWidth * slidesLength);
	
	function isVisible() {
		if (curPosition === 0) {
			$('#previous').hide();
		} else if (curPosition === slidesLength - 1) {
			$('#next').hide();
		} else {
			$('#next').show();
			$('#previous').show();
			}
	}
	
	function nextSlide() {
		curPosition++;
		$('#slidesHolder').animate( {'marginLeft' : (-curPosition) * width} );
		isVisible();
	}
	
	function previousSlide() {
		curPosition--;
		$('#slidesHolder').animate( {'marginLeft' : (-curPosition) * width} );
		isVisible();
	}
	/*
	function nextPosition() {
		if(curPosition < (slidesLength - 1)) {
			curPosition ++;
		} else {
			curPosition = 0;
		}
		moveSlide();
	}
					
	function moveSlide() {
		$('#slidesHolder').animate( {'marginLeft' : (-curPosition) * width} );
	}*/
					
});