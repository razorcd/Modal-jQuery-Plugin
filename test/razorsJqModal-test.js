	$(function(){
	//initialisation
	QUnit.begin(function(){
		$("body").css({"overflow-y":"scroll"});   //always displaing scroll so it will not change screen width

		//creating #modal-element and adding to DOM
		var $modalElement = $("<div id='modal-element'> <br/> <p> This is the modals content </p> </div>");
		$modalElement.css({"background":"red"});
		$modalElement.css({"width":"300px"});
		$modalElement.append($("<button id='modalBut'> OK </button>"))
		$("body").append($modalElement);

		$("#modal-element").razorModal();  //executing plugin on element	
	});


	QUnit.begin(function(){
		//$("#modal-element").remove();
		//$("#modal-element2").remove();
	});



	module("Initialising #modal-element");


		test("#modal-element should be on the DOM", function(){
			equal( $("*[id='modal-element']").length , 1 , "#modal-element is on the DOM");
		});


		test("#modal-element should have correct CSS", function(){
			var top =  ($(window).outerHeight() - $("#modal-element").height())/2;
			var left = ($(window).outerWidth() - $("#modal-element").width())/2

			equal($("#modal-element").css("position"), "fixed", "#moda-element CSS has correct position=fixed");
			equal($("#modal-element").css("top"), top+"px", "#moda-element CSS has correct top="+top);
			equal($("#modal-element").css("left"), left+"px", "#moda-element CSS has correct left="+left);
		});

		test("#modal-element should be hidden", function(){
			equal($("#modal-element").css("display"), "none", "#modal-element is hidden");
		})



	module("Initialising #modal-overlay");

		test("there should be a #modal-overlay element on the DOM after initialisation", function(){
			equal($("#modal-overlay").length,1 , "#modal-overlay elem is on the DOM");
		});

		test("#modal-overlay should have correct CSS", function(){
			equal( $("#modal-overlay").css("position"), "fixed", "#modal-overlay has CSS  position:fixed");
			equal( $("#modal-overlay").css("top"), "0px", "#modal-overlay has CSS  top:0");
			equal( $("#modal-overlay").css("left"), "0px", "#modal-overlay has CSS  left:0");
			equal( $("#modal-overlay").css("width"),  $(window).outerWidth()+"px" , "#modal-overlay has correct CSS width" );
			equal( $("#modal-overlay").css("height"), $(window).outerHeight()+"px" , "#modal-overlay has correct CSS width" );
			equal( $("#modal-overlay").css("z-index"), "900" , "#modal-overlay has correct CSS z-index" );
			equal( $("#modal-overlay").css("opacity"), "0.75" , "#modal-overlay has correct CSS opacity" );
		});


		test("#moda-overlay should have have a click event tht hides it", function(){
			$("#modal-overlay").show();
			notEqual( $("#modal-overlay").css("display"), "none", "#modal-overlay is visible" );
			$("#modal-overlay").trigger("click");
			equal( $("#modal-overlay").css("display"), "none", "#modal-overlay is not visible" );
		})




module("Using the plugin 2nd time on different elem");


		//creating #modal-elemen2t and adding to DOM
		var $modalElement = $("<div id='modal-element2'> <p> This is the modals2 content ......</p> </div>");
		$modalElement.css({"background":"pink"});
		$modalElement.css({"width":"500px"});
		$modalElement.append($("<button id='modalBut2'> OK </button>"))
		$("body").append($modalElement);

		$("#modal-element2").razorModal();  //executing plugin second time


	test("there should be a second #moda-element2", function(){
		equal( $("*[id='modal-element2']").length, 1, "there is 1 #modal-element2 on the DOM");
	})

	test("there should be only one #modal-overlay", function(){
		equal( $("*[id='modal-overlay'").length, 1, "there is only 1 #modal-overlay");
	})



module("activating/deactivating #modal-element");
	

	test("#modal-element should show/hide when activated/deactivated by command line", function(){
		$("#modal-element").razorModal({"action":"show"});
		equal( $("body,html").css("overflow"), "hidden", "scroll is hidden");
		notEqual( $("#modal-element").css("display"), "none", "#modal-element is displayed");
		notEqual( $("#modal-overlay").css("display"), "none", "#modal-overlay is displayed");
		
		$("#modal-element").razorModal({"action":"hide"});
		notEqual( $("body,html").css("overflow"), "hidden", "scroll is visible");
		equal( $("#modal-element").css("display"), "none", "#modal-element is hidden");
		equal( $("#modal-overlay").css("display"), "none", "#overlay-element is hidden");
	})


	test("#modal-element should shohide when deactivated by click on #modal-overlay", function(){
		$("#modal-element").razorModal({"action":"show"});
		equal( $("body,html").css("overflow"), "hidden", "scroll is hidden");
		notEqual( $("#modal-element").css("display"), "none", "#modal-element is displayed");
		notEqual( $("#modal-overlay").css("display"), "none", "#modal-overlay is displayed");
		
		$("#modal-overlay").trigger("click");
		notEqual( $("body,html").css("overflow"), "hidden", "scroll is visible");
		equal( $("#modal-element").css("display"), "none", "#modal-element is hidden");
		equal( $("#modal-overlay").css("display"), "none", "#overlay-element is hidden");
	})



})

