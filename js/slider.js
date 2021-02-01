$(document).ready(function() {
	var $slides = $(".slider-items").children();
	var $texts = $(".desc-column").children();
	var $nextSlide = $(".next-btn");
	var $prevSlide = $(".prev-btn");
	const totalSlides = $slides.length - 1;
	let index = 0;
	
	$nextSlide.click(function() {
		resetSpinners();
		next("next");
	});

	$prevSlide.click(function() {
		resetSpinners();
		next("prev");
	});
	
	function resetSpinners() {
		$(".bg-spinner").removeClass("spinner-lg");
		
		// trigger a DOM reflow
		void $(".bg-spinner").width();
		$(".bg-spinner").addClass("spinner-lg");
		
		$(".slider-spinner").removeClass("spinner-sm");
		
		// trigger a DOM reflow
		void $(".slider-spinner").width();
		$(".slider-spinner").addClass("spinner-sm");
	}
	
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
		
		for (let i = 0; i < $slides.length - 1; i++) {
			$slides.eq(i).removeClass("active");
			$texts.eq(i).removeClass("active");
		}
		
		$slides.eq(index).addClass("active");
		$texts.eq(index).addClass("active");
		
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
		
		function fade() {
			$("#fade").removeClass("background");
		
			// trigger a DOM reflow
			void $("#fade").width();
			$("#fade").addClass("background");
		}
	}
	
	let isDesktopView = false;
	
	$(".next-btn, .prev-btn").hover(function() {
		if (isDesktopView) {
  		$(".slider-items").css("border-color", "#eeee00");
			$(".bg-border").css("border-color", "#eeee00");
		}
	}, function() { // on mouseout, reset the properties
  	$(".slider-items").css("border-color", "");
		$(".bg-border").css("border-color", "");
	});
	
	setScreenWidthFlag();
	
	$(window).on("resize", function() {
		setScreenWidthFlag();
	});
	
	function setScreenWidthFlag() {
		if ($(window).width() < 992) {
			isDesktopView = false;
		}
		
		else {
			isDesktopView = true;
		} 
	}
});