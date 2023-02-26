(function( $ ) {
	'use strict';

	var percentage = 0.1;

	var textNodes = $("*:not(html,head,meta,link,iframe,script,style,svg,img)").contents().filter(function(){
	return this.nodeType == 3;
	});
	
	function dsxyliea_th(){
		$(textNodes).each(function(index,ele){
			if(Math.random() < percentage){
				ele.nodeValue = messUp(ele.nodeValue);
			}
		});
	}
	
	function messUp(text){
		if(text.length < 2){
			return text;
		}
		var a = randomInt(0,text.length - 2);
		var b = randomInt(a+1,text.length - 1);
			
		return text.slice(0,a) + text[b] + text.slice(a+1,b) + text[a] + text.slice(b+1)		
	}
	
	function randomInt(min,max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
	setInterval(dsxyliea_th,50);

})( jQuery );
