global.sizeResize = {
 	large:[],
 	medium:[],
 	small:[],
 	any:[],
 	$the_window:'',
 	$body:'',
	mobile_width_max:768,
	tablet_width_max:1024, 	
	addLarge:function(func){
 		this.large.push(func);
 	},
 	addMedium:function(func){
 		this.medium.push(func);
 	},
 	addSmall:function(func){
 		this.small.push(func);
 	},
 	addAny:function(func){
 		this.any.push(func);
 	},
 	sizecheck:function(){
		var window_width = sizeResize.$the_window.innerWidth;
		sizeResize.$body.classList.remove('large');
		sizeResize.$body.classList.remove('medium');
		sizeResize.$body.classList.remove('small');
		console.log(window_width);
		if(window_width < sizeResize.mobile_width_max){
			sizeResize.$body.classList.add('small');
			for(var i=0; i<sizeResize.small.length; i++){
				sizeResize.small[i]();
			}
		}else if(window_width >= sizeResize.mobile_width_max && window_width <= sizeResize.tablet_width_max){
			sizeResize.$body.classList.add('medium');
			for(var i=0; i<sizeResize.medium.length; i++){
				sizeResize.medium[i]();
			}
		}else{
			sizeResize.$body.classList.add('large');
			for(var i=0; i<sizeResize.large.length; i++){
				sizeResize.large[i]();
			}
		}
		
		for(var i=0; i<size.any.length; i++){
			sizeResize.any[i]();
		}
	},
 	init:function(){
 		this.$the_window = window;
 		this.$body = document.body;
 		document.body.style.backgroundColor = "yellow";
 		var resizeTimer;
 		window.onresize = function() {
			
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {

			    // Run code here, resizing has "stopped"
			    sizeResize.sizecheck();
			    
			  }, 250);
			  
		}
		sizeResize.sizecheck();
 	}
};
module.exports = sizeResize;