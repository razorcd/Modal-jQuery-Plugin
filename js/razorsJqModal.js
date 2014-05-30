(function($){

	//activate/deactivate scroll
	var setScroll=function(bool){

		if (!bool) {
			$('body, html').css({ overflow: 'hidden' });
			// $(document.body).on("touchmove", function(event) {
		 //    	event.preventDefault();
		 //    	event.stopPropagation();
		 // 	});

	 	// 	$(document.window).on("scroll", function(e){
	 	// 		console.log("scroll off");
			// 	e.preventDefault();
			// 	e.stopPropagation();
			// })
		}
		 else {
		 	$('body,html').css({ overflow: '' });
		 	// $(document.body).off("touchmove");
		 	// $(window).off("scroll");
		 }
	}


	var $overlay = $("<div id='modal-overlay'></div>");
	$overlay.css({
		"position":"fixed",
		"top":"0",
		"left":"0",
		"width":"100%",
		"height":"100%",
		"background":"#666",
		"z-index":"900",
		"opacity":"0.75"
	})

	$("body").append($overlay);
	$overlay.hide();

	$("#modal-overlay").on("click", function(){
		$(this).hide();
		setScroll(true);
	})

	$.fn.razorModal = function(opt){

		if(opt && (opt.action === "show")) {
			$("#modal-overlay").show();
			$(this).show();
			setScroll(false);
		}

		if(opt && (opt.action === "hide")) {
			$(this).hide();
			$("#modal-overlay").hide();
			setScroll(true);
		}

		//initialise
		if(opt === undefined) {
			return this.each(function(){
	 			var thiz = this;
				//add css
				$(this).css({"position":"fixed"});
				$(this).css({
					"top": ($(window).outerHeight() - $(this).height())/2,
					"left": ($(window).outerWidth() - $(this).width())/2,
					"z-index":"1000"
				});

				$("#modal-overlay").on("click", function(){
					$(thiz).hide();
				})
				$(this).hide();
	
				return this;
			})
		}
	}



})(jQuery);



/*
$("#modal-element").razormodal();    				//set element as a modal;
$("#modal-element").razormodal({"action":"show"});  //show the modal element
$("#modal-element").razormodal({"action":"hide"});  //hide the modal element

TODO:
	animate
*/
