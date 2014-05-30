$(function(){
	$("#themodal").razorsModalInit();
	$("#themodal2").razorsModalInit();

	$("#themodal").razorsModalShow();
	$("#themodal2").razorsModalShow();

	//$("#themodal").razorsModalHide();

	$("#themodalEnd2").on("click", function(){
		$("#themodal2").razorsModalHide();
	})
})