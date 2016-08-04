# SizeResize

When building responsive websites I have found that not only was I writting different CSS for various breakpoints but also different JavaScript functions as well. Each project had a differnt variation of the same code with the same problems. The resize event was handled with jQuery and scoped to a DOM Ready function making it useless to any funcions outside of that scope.

I wrote SizeResize to make it easy call JavaScript functions at different browser sizes. SizeResize does not rely on any JavaScript libraries, is globally scoped, easy to overwrite the default settings, performance focused and light weight (3kb unminified).

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
	}
}

// Adds the function to the small breakpoint. Note there are no parenthesis.
sizeResize.addSmall(breakpoints.small);

// Adds the function to all breakpoints
// Parameters are passed in as an array
sizeResize.addAny(breakpoints.all, ['The first parameter', 'Param 2']);

// Initialize sizeResize. 
sizeResize.init();
```


## Documentation and Examples Coming Soon
I hope to get documentation and examples complete by August 8th, 2016.

## To-do
* Write Unit Tests
* Write Documentation
* Create example code to show this in action
* Lint code
* Drink more coffee