(function($){

	var actions = {

		//activate/deactivate scroll
		setScroll: function(bool){
			if (!bool) {
				$('body, html').css({ overflow: 'hidden' });
				// $(document.body).on("touchmove", function(event) {
			 //    	event.preventDefault();
			 //    	event.stopPropagation();
			 // 	});

		 	// 	$(document.window).on("scroll", function(e){
		 	// 		console.log("scroll off");
				// 	e.preventDefault();
				// 	e.stopPropagation();})
			}
			else {
			 	$('body,html').css({ overflow: '' });
			 	// $(document.body).off("touchmove");
			 	// $(window).off("scroll");
			 }
		},
		show : function(thisEl){
			$("#modal-overlay").show();
			$(thisEl).show();
			this.setScroll(false);
		},
		hide: function(thisEl){
			$(thisEl).hide();
			$("#modal-overlay").hide();
			this.setScroll(true);
		},
		animateShow: function(thisEl){
			$("#modal-overlay").css({"opacity":"0"});
			$("#modal-overlay").css({"display":""});
			$(thisEl).css({"opacity":"0"});
			$(thisEl).css({"display":""});
			$("#modal-overlay").animate({"opacity":"0.75"},$.fn.razorModal.defaults.time);
			$(thisEl).animate({"opacity":"1"},$.fn.razorModal.defaults.time);
			this.setScroll(false);
		},
		animateHide: function(thisEl){
			$("#modal-overlay").animate({"opacity":"0"},$.fn.razorModal.defaults.time);
			$(thisEl).animate({"opacity":"0"},$.fn.razorModal.defaults.time, function(){ 
				$("#modal-overlay").css({"display":"none"});
				$("#modal-overlay").css({"opacity":"1"});
				$(thisEl).css({"display":"none"});
				$(thisEl).css({"opacity":"1"});
				actions.setScroll(true);
			});
		},
		initialise: function(thisEl){
				//add css
				$(thisEl).css({"position":"fixed"});
				$(thisEl).css({
					"top": ($(window).outerHeight() - $(thisEl).height())/2,
					"left": ($(window).outerWidth() - $(thisEl).width())/2,
					"z-index":"1000"
				});

				$("#modal-overlay").on("click", function(){
					$(thisEl).hide();
				})
				$(thisEl).hide();
		},
		initialiseOverlay: function(){
			var $overlay;

			if ($("#modal-overlay").length ===1 ) {
				$overlay = $("#modal-overlay");
				$overlay.css($.fn.razorModal.defaults.overlayCss);
			}
			else {
				$overlay = $("<div id='modal-overlay'></div>");
				$overlay.css($.fn.razorModal.defaults.overlayCss);
				$("body").append($overlay);
				$overlay.hide();

				$("#modal-overlay").on("click", function(){
					$(this).hide();
					actions.setScroll(true);
				})
			}
		}
	}

	
	$.fn.razorModal = function(opt){

		//show
		if(opt && (opt.action === "show")) {
			console.log("show");
			actions.show(this);
		}

		//hide
		if(opt && (opt.action === "hide")) {
			actions.hide(this);
		}

		//animate-show
		if(opt && (opt.action === "animate-show")) {
			actions.animateShow(this);
		}

		//animate-hide
		if(opt && (opt.action === "animate-hide")) {
			actions.animateHide(this);
		}

		//initialise
		if(opt && (opt.action === "init")) {
			return this.each(function(){
	 			actions.initialise(this);
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

	$.fn.razorModal.setOverlay = function(newOverlayCss){
		if (newOverlayCss && (typeof newOverlayCss === "object"))
			$.extend($.fn.razorModal.defaults.overlayCss, newOverlayCss);
		actions.initialiseOverlay();
	}

	actions.initialiseOverlay();



})(jQuery);



/*
$("#modal-element").razormodal({"action":"init"});    						//set element as a modal;
$("#modal-element").razormodal({"action":"show"});  		//show the modal element
$("#modal-element").razormodal({"action":"hide"});  		//hide the modal element
$("#modal-element")razorModal({"action":"animate-show"});   //animate-show the modal element
$("#modal-element")razorModal({"action":"animate-hide"});   //animate-hide the modal element

$.fn.razorModal.setOverlay(									//change overlay CSS settings
{
	"background":"rgb(255, 153, 51)",
	"opacity":"0.25",
	"z-index":"900"
});

$.fn.razorModal.defaults.time = 100;						//change animation-show /hide time
*/

//TODO: add callbacks