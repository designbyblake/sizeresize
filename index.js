global.sizeResize = {
 	xlarge:[],
 	large:[],
 	medium:[],
 	small:[],
 	any:[],
 	$the_window:window,
 	$body:document.body,
	small_max:640,
	medium_max:1024,
	large_max:1200,
	pause:250,
	currentSize:'',
	previousSize:'',
	addXlarge: function(func, params){
		this.xlarge.push([func, params]);
	},
	addLarge:function(func, params){
 		this.large.push([func, params]);
 	},
 	addMedium:function(func, params){
 		this.medium.push([func, params]);
 	},
 	addSmall:function(func, params){
 		this.small.push([func, params]);
 	},
 	addAny:function(func, params){
 		this.any.push([func, params]);
 	},
 	getWidth:function(){
		return sizeResize.$the_window.innerWidth;
	},
	getCurrent:function(width){
		sizeResize.previousSize = sizeResize.currentSize;
		if(width <= sizeResize.small_max){
			sizeResize.currentSize = 'small';
		}else if(width > sizeResize.small_max && width <= sizeResize.medium_max){
			sizeResize.currentSize = 'medium';
		}else if(width > sizeResize.medium_max && width <= sizeResize.large_max){
			sizeResize.currentSize = 'large';
		}else{
			sizeResize.currentSize = 'xlarge';
		}
		return sizeResize.currentSize;
	},
	runFunctions:function(){
		sizeResize.$body.classList.remove('size--xlarge');
		sizeResize.$body.classList.remove('size--large');
		sizeResize.$body.classList.remove('size--medium');
		sizeResize.$body.classList.remove('size--small');
		if(sizeResize.currentSize === 'small'){
			this.$body.classList.add('size--small');
			for(var i=0; i<sizeResize.small.length; i++){
				sizeResize.small[i][0].apply(this, sizeResize.small[i][1]);
			}
		}else if(sizeResize.currentSize === 'medium'){
			this.$body.classList.add('size--medium');
			for(var i=0; i<sizeResize.medium.length; i++){
				sizeResize.medium[i][0].apply(this, sizeResize.medium[i][1]);
			}
		}else if(sizeResize.currentSize === 'large'){
			this.$body.classList.add('size--large');
			for(var i=0; i<sizeResize.large.length; i++){
				sizeResize.large[i][0].apply(this, sizeResize.large[i][1]);
			}
		}else if(sizeResize.currentSize === 'xlarge'){
			this.$body.classList.add('size--xlarge');
			for(var i=0; i<sizeResize.xlarge.length; i++){
				sizeResize.xlarge[i][0].apply(this, sizeResize.xlarge[i][1]);
			}
		}

		for(var i=0; i<sizeResize.any.length; i++){
			sizeResize.any[i][0].apply(this,sizeResize.any[i][1]);
		}
	},
 	sizeCheck:function(){
		if(sizeResize.getCurrent(sizeResize.getWidth()) === sizeResize.previousSize){
			return false;
		}
		
		sizeResize.runFunctions();
	},
 	init:function(){
 		
 		sizeResize.getCurrent(sizeResize.getWidth());
 		sizeResize.runFunctions();

 		var endResizeEvent;
 		window.onresize = function() {
			clearTimeout(endResizeEvent);
			endResizeEvent = setTimeout(function() {
			    // Run code here, resizing has "stopped"
			    sizeResize.sizeCheck();
			  }, sizeResize.pause);
			  
		}
 	}
};
module.exports = sizeResize;