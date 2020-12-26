$(document).ready(function() {
	var $slides = $(".slider-items").children();
	var $texts = $(".desc-column").children();
	var $nextSlide = $(".next-btn");
	var $prevSlide = $(".prev-btn");
	const totalSlides = $slides.length;
	let index = 0;

	$nextSlide.click(function() {
		next("next");
	});

	$prevSlide.click(function() {
		next("prev");
	});

	function next(direction) {
		if (direction == "next") {
			index++;
		
			if (index === totalSlides) {
				index = 0;
    	}
  	}
	
  	else {
			if (index === 0) {
				index = totalSlides - 1;
			}
		
			else {
				index--;
			}
		}
	
		for (let i = 0; i < $slides.length; i++) {
			$slides.eq(i).removeClass("active");
			$texts.eq(i).removeClass("active");
  	}
	
		$slides.eq(index).addClass("active");
		$texts.eq(index).addClass("active");
	
		var $load = $("#load");
		$load.removeClass("bg-progbar");
	
		// trigger a DOM reflow
		void $load.width(); 
		$load.addClass("bg-progbar");
	
		function fade() {
			var $fade = $("#fade");
			$fade.removeClass("background");
		
			// trigger a DOM reflow
			void $fade.width(); 
			$fade.addClass("background");
		}
	
		switch(index) {
  		case 0:
				fade();
    		$(".background").css("background-image", "url(images/bg1.png)");
    		break;
  		case 1:
				fade();
    		$(".background").css("background-image", "url(images/bg2.png)");
    		break;
  		case 2:
				fade();
    		$(".background").css("background-image", "url(images/bg3.png)");
    		break;
		}
	}
	
	let isDesktopView = false;
	
	function setScreenWidthFlag() {
		if ($(window).width() < 992) {
			isDesktopView = false;
		}
		
		else {
			isDesktopView = true;
		} 
	}
	
	$(".next-btn, .prev-btn").hover(function() {
		if (isDesktopView) {
  		$(".item").css("border-color", "yellow");
			$(".bg-progbar").css("border-color", "yellow");
		}
	}, function() { // on mouseout, reset the properties
  	$(".item").css("border-color", "");
		$(".bg-progbar").css("border-color", "");
	});
	
	setScreenWidthFlag();
	
	$(window).on("resize", function() {
		setScreenWidthFlag();
	});
});