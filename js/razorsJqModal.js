(function($){

	
	$.fn.razorModal = function(opt){

		//show
		if(opt && (opt.action === "show")) {
			$("#modal-overlay").show();
			$(this).show();
			setScroll(false);
		}

		//hide
		if(opt && (opt.action === "hide")) {
			$(this).hide();
			$("#modal-overlay").hide();
			setScroll(true);
		}

		//animate-show
		if(opt && (opt.action === "animate-show")) {
			$("#modal-overlay").css({"opacity":"0"});
			$("#modal-overlay").css({"display":""});
			$(this).css({"opacity":"0"});
			$(this).css({"display":""});
			$("#modal-overlay").animate({"opacity":"0.75"},1000);
			$(this).animate({"opacity":"1"},1000);
			setScroll(false);
		}

		//animate-hide
		if(opt && (opt.action === "animate-hide")) {
			$("#modal-overlay").animate({"opacity":"0"},1000);
			$(this).animate({"opacity":"0"},1000, function(){ 
				$("#modal-overlay").css({"display":"none"});
				$("#modal-overlay").css({"opacity":"1"});
				$(this).css({"display":"none"});
				$(this).css({"opacity":"1"});
				setScroll(true);
			});

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


	//default options
	$.fn.razorModal.defaults = {
		overlayCss : {
			"position":"fixed",
			"top":"0",
			"left":"0",
			"width":"100%",
			"height":"100%",
			"background":"#666",
			"z-index":"900",
			"opacity":"0.75"
		},
		time: 100
	}



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
	$overlay.css($.fn.razorModal.defaults.overlayCss)

	$("body").append($overlay);
	$overlay.hide();

	$("#modal-overlay").on("click", function(){
		$(this).hide();
		setScroll(true);
	})



})(jQuery);



/*
$("#modal-element").razormodal();    						//set element as a modal;
$("#modal-element").razormodal({"action":"show"});  		//show the modal element
$("#modal-element").razormodal({"action":"hide"});  		//hide the modal element
$("#modal-element")razorModal({"action":"animate-show"});   //animate-show the modal element
$("#modal-element")razorModal({"action":"animate-hide"});   //animate-hide the modal element
*/
