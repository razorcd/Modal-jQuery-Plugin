Modal jQuery Plugin
===================

>Include razorModal.js after jQuery.js 1.x


Creat an element on the body to serve as the modal. Add ID="#modal-element" or whatever.

Use:
```
$("#modal-element").razormodal({"action":"init"});    		//set element as a modal;
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
```

TODO: yourApp.html as an example to use
TODO: add callbacks

