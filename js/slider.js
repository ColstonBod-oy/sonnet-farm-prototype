$(document).ready(function() {
	var $slides = $(".slider-items").children();
	var $texts = $(".desc-column").children();
	var $nextSlide = $(".next-btn");
	var $prevSlide = $(".prev-btn");
	const totalSlides = $slides.length - 1;
	let index = 0;
	
	for (let i = 1; i < $slides.length - 1; i++) {
		//$slides.eq(i).removeClass("active");
		//$texts.eq(i).removeClass("active");
		$slides.eq(i).hide();
		$texts.eq(i).hide();
	}
	
	$nextSlide.click(function() {
		next("next");
	});

	$prevSlide.click(function() {
		next("prev");
	});
	
	function next(direction) {
		$slides.eq(index).fadeOut("slow");
		$texts.eq(index).fadeOut("slow");
		
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
		
		//$slides.eq(index).addClass("active");
		//$texts.eq(index).addClass("active");
		$slides.eq(index).delay("slow").fadeIn("slow");
		$texts.eq(index).delay("slow").fadeIn("slow");
		
		var $load = $("#load");
		$load.removeClass("bg-bar");
	
		// trigger a DOM reflow
		void $load.width(); 
		$load.addClass("bg-bar");
	
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
  		$(".item").css("border-color", "#eeee00");
			$(".bg-bar").css("border-color", "#eeee00");
		}
	}, function() { // on mouseout, reset the properties
  	$(".item").css("border-color", "");
		$(".bg-bar").css("border-color", "");
	});
	
	setScreenWidthFlag();
	
	$(window).on("resize", function() {
		setScreenWidthFlag();
	});
});