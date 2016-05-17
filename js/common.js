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




});
