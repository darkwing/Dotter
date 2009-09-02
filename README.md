Dotter
=========

Dotter is a plugin that allows you to create XHTML-based, periodical indicators quickly and easily.

![Screenshot](http://davidwalsh.name/dw-content/dotter.png)


How to Use
----------

Dotter can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  Starting or stopping your Dotter instances may occur any time. The only required argument is the Dotter container however you may also customize each instance via the options argument.

	#JS
	/* usage */
	var ajaxDotter = new Dotter('dot-me',{
		delay: 1000,
		dot: '.',
		message: 'Loading'
	});
	var request = new Request({
		//your regular ajax/request options here
		onRequest:function() {
			ajaxDotter.start();
		},
		onComplete:function() {
			ajaxDotter.stop();
		}
	});
	
For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/dotter](http://davidwalsh.name/js/dotter)