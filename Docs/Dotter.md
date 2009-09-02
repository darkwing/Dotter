Class: Dotter {#Dotter}
=================================

### Implements:

Options, Events


Dotter Method: constructor {#Dotter:constructor}
-----------------------------------------------------------


### Syntax:

	var myDotter = new Dotter(container, options);

### Arguments:

1. container - (*string*)  The ID of the container which will hold the Dotter text.
2. options - (**)  The options for the Dotter instance.

### Options:

* delay - (*integer*, defaults to 1000)  The dot addition delay.
* dot - (*string*, defaults to '.')  The character to act as the "dot"
* message - (*string*, defaults to "Loading")  The text to accompany the Dots.
* numDots - (*integer*, defaults to 3)  The number of dots before resetting the dot count.
* property - (*string*, defaults to "text")  The container element's property which will be modified with the message and dots.
* reset - (*boolean*, defaults to false) - Should the Dotter instance reset on every start and stop?

Dotter Method: start {#Dotter:start}
-----------------------------------------------


### Syntax:

	dotter.start();

### Returns:

The Dotter instance.



Dotter Method: stop {#Dotter:stop}
---------------------------------------------


### Syntax:

	dotter.stop();

### Returns:

The Dotter instance.



### Events:

### start

* (*function*) Function to execute when the Dotter is started.

### Signature

	onStart(fn)
	
#### Arguments:

1. fn - (*function*) The function to execute when the Dotter starts.

### stop

* (*function*) Function to execute when the Dotter is stopped.

### Signature

	onStop(fn)
	
#### Arguments:

1. fn - (*function*) The function to execute when the Dotter stops.

### dot

* (*function*) Function to execute on each dot.

### Signature

	onDot(fn)
	
#### Arguments:

1. fn - (*function*) The function to execute when the Dotter adds a dot.