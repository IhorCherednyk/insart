$(function() {

	$('.slider').owlCarousel({
		loop:true,
		margin: 0,
		nav:true,
		navText:false,
		navSpeed:1000,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			400:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
	})


	var owl = $('.owl-carousel');

	$(document).on("ready", function(event){
		var el = $(".events .owl-item.active");
		el.each(function(index, el) {
			if(index == 0){
				$(el).addClass("current");
				var a = $(this.children).get(0).id;
				var c = $(".events-slider-inner").find( $(".es-wrapper") )
				c.each(function(index,c){
					$(this).removeClass("active")
					if(c.dataset.name == a){
						$(this).addClass("active")
					}
				});
				return false;
			}
		});
	});

	owl.on('translated.owl.carousel', function(event){
		var el = $(".events .owl-item.active");
		var wholeEl = $(".blog .owl-item");
		$(".current").removeClass("current");
		el.each(function(index, el) {
			if(index == 0){
				$(el).addClass("current");
				var a = $(this.children).get(0).id;
				var c = $(".events-slider-inner").find( $(".es-wrapper"));
				c.each(function(index,c){
					$(this).removeClass("active");
					if(c.dataset.name == a){
						$(this).addClass("active");
						$(this).css("opacity","1");

					}

				});
			}
		});


	});
	owl.on('translate.owl.carousel', function(event){
		var el = $(".events .owl-item.active");
		el.each(function(index, el) {
			if(index == 0){
				var a = $(this.children).get(0).id;
				var c = $(".events-slider-inner").find( $(".es-wrapper"));
				c.each(function(index,c){
					$(this).css("opacity","0");
				});
			}
		});
	});


	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = $(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
		if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		}

		// Replace image with new SVG
		$img.replaceWith($svg);

	}, 'xml');

	});



});
