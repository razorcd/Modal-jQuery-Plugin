#Modal jQuery Plugin  v1.0

Created with TDD(Qunit). Open razorsJqModal-test.html to run all tests.

>Include razorsJqModal.min.js after jQuery.js 1.x in your project.

>Create an element on the body to serve as a modal. Add ID="#modal-element" or whatever ID.

##Use:
```html
<html>
<head>
	<link rel="stylesheet" type="text/css" href="modal.css">
	<script type="text/javascript" src="jquery-1.11.1.min.js" ></script>
	<script type="text/javascript" src="razorsJqModal.js" ></script>
</head>
<body>
	<div id="modal_element">
		<p>Lorem ipsum dolor sit amet ...</p>
		<button> OK </button>
	</div>
</body>
</html>
```

In your JS file:
``` javascript
$("#modal_element").razorModal({"action":"init"});    		//set element as a modal;
$("#modal_element").razorModal({"action":"show"});  		//show the modal element when you need it
$("#modal_element").razorModal({"action":"hide"});  		//hide the modal element when you need to
$("#modal_element").razorModal({"action":"animate-show"});   //animate-show the modal element when you need it
$("#modal_element").razorModal({"action":"animate-hide"});   //animate-hide the modal element when you need to

$.fn.razorModal.setOverlay(									//change overlay CSS settings
{
	"background":"rgb(255, 153, 51)",
	"opacity":"0.25",
	"z-index":"900"
});

$.fn.razorModal.defaults.time = 100;						//change animation-show/hide time

$("#modal_element2").razorModal({"action":"init"});    		//multiple modals can be added
...
```

##TODO: 
- default "scroll disabled on modal show" should have `disable` option in options
- default "close modal by clicking overlay" should have `disable` option in options
- add option to run callbacks on `.razorModal` show/hide calls
- change `{"action":"init"}` to `"init"`
- add version number to modal js file

