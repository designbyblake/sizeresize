# SizeResize

When building responsive websites I have found that not only was I writting different CSS for various breakpoints but also different JavaScript functions as well. Each project had a differnt variation of the same code with the same problems. The resize event was handled with jQuery and scoped to a DOM Ready function making it useless to any funcions outside of that scope.

I wrote SizeResize to make it easy call JavaScript functions at different browser sizes. SizeResize does not rely on any JavaScript libraries, is globally scoped, easy to overwrite the default settings, performance focused and light weight (3kb unminified).

## Key Features
* 4 different breakpoints to call functions
* A catch all if you want to call a function on every change in breakpoint 
* Functions are only called if the breakpoint changes
* window.onresize event waits for resize event to end before checking if functions need to be called (huge performance boost)
* Default settings are easily to change 

## Install

With [npm](https://www.npmjs.com/) do:

```
npm install --save-dev sizeresize
```

## How to use SizeResize

Using your favorite JavaScript module bundler, such as [browserify](http://browserify.org/) require SizeResize, add your functions to the desired breakpoint and then run the init function.

``` js
var sizeResize = require('sizeResize');

// Example uses namespaced functions but you can use what you like
var breakpoints = {
	small:function(){
		console.log('Small');
	},
	all:function(text1, text2){
		console.log('This is text1: ' + text1);
		console.log('This is text2: ' + text2);
	},
	foo:function(){},
	bar:function(){},
	baz:function(){}
}

// Adds the function to the small breakpoint. Note there are no parenthesis.
sizeResize.addSmall(breakpoints.small);

// Adds our fake functions to remaining sizes
sizeResize.addMedium(breakpoints.foo);
sizeResize.addLarge(breakpoints.bar);
sizeResize.addXlarge(breakpoints.baz);

// Adds the function to all breakpoints
// Parameters are passed in as an array
sizeResize.addAny(breakpoints.all, ['The first parameter', 'Param 2']);


// Initialize sizeResize; This starts the window resize listener.
// This will also immediately call any functions for the current breakpoint and addAny
sizeResize.init();
```


## More Documentation and Examples Coming Soon
I hope to get documentation and examples complete by August 8th, 2016.

## To-do
* Write Unit Tests
* Write Documentation
* Create example code to show this in action
* Lint code
* Drink more coffee