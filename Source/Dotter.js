(function($) { 
	this.Dotter = new Class({
	
		/* implements */
		Implements: [Options,Events],

		/* options */
		options: {
			delay: 1000,
			dot: '.',
			message: 'Loading',
			numDots: 3,
			property: 'text',
			reset: false/*,
			onDot,
			onStart,
			onStop
			*/
		},
	
		/* initialization */
		initialize: function(container,options) {
			/* set options */
			this.setOptions(options);
			this.container = $(container);
			this.dots = 0;
			this.running = false;
		},
	
		/* adds dot */
		dot: function() {
			if(this.running) {
				var text = this.container.get(this.options.property);
				this.dots++;
				this.container.set(this.options.property,(this.dots % this.options.numDots != 0 ? text : this.options.message) + '' + this.options.dot);
			}
			return this;
		},
	
		/* loads or resets the dotter */
		load: function() {
			this.loaded = true;
			this.dots = 0;
			this.dotter = function(){ this.dot(); this.fireEvent('dot'); }.bind(this);
			this.periodical = this.dotter.periodical(this.options.delay);
			this.container.set(this.options.property,this.options.message + '' + this.options.dot);
			return this;
		},
	
		/* start the dotter */
		start: function() {
			if(!this.loaded || this.options.reset) this.load();
			this.running = true;
			this.fireEvent('start');
			return this;
		},
	
		/* stop the dotter */
		stop: function() {
			this.running = this.loaded = false;
			$clear(this.periodical);
			this.fireEvent('stop');
			return this;
		}
	});
});