$(function(){
	$("#themodal").razorModal({"action":"init"});
	$("#themodal2").razorModal({"action":"init"});



	$("#but1").on("click", function(e){
		e.preventDefault();
		$("#themodal").razorModal({"action":"show"});
	})

	$("#but2").on("click", function(e){
		e.preventDefault();
		$("#themodal2").razorModal({"action":"animate-show"});
	})

	$("#themodalEnd").on("click", function(){
		$("#themodal").razorModal({"action":"hide"});
	})

	$("#themodalEnd2").on("click", function(){
		$("#themodal2").razorModal({"action":"animate-hide"});
	})
})