Modal jQuery Plugin
===================

>Include razorModal.js after jQuery.js 1.x


Creat an element on the body to serve as the modal. Add ID="#modal-element" or whatever.

Use:
```
$("#modal-element").razorModal({"action":"init"});    		//set element as a modal;
$("#modal-element").razorModal({"action":"show"});  		//show the modal element
$("#modal-element").razorModal({"action":"hide"});  		//hide the modal element
$("#modal-element").razorModal({"action":"animate-show"});   //animate-show the modal element
$("#modal-element").razorModal({"action":"animate-hide"});   //animate-hide the modal element

$.fn.razorModal.setOverlay(									//change overlay CSS settings
{
	"background":"rgb(255, 153, 51)",
	"opacity":"0.25",
	"z-index":"900"
});

$.fn.razorModal.defaults.time = 100;						//change animation-show /hide time

$("#modal-element2").razorModal({"action":"init"});    		//multiple modals can be added
```

TODO: yourApp.html as an example to 

TODO: add callbacks

