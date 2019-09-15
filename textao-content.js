
;(function( doc ) {

	//get the maximum character quantity
	var maxCharQuantity;
	chrome.storage.sync.get({
		'maxCharQuantityStored' : 300
	}, function(items) {
		maxCharQuantity = items.maxCharQuantityStored;
		});

	//set interval to run the posts verification
	window.setInterval(function() {
	   	   
		   
	//posts verification	   
	$("._3ccb:not(._5pbu) > .fbUserContent._5pcr:not(.tb-verified)").each(function(index){
	
		var charSum = 0;
   
		$(this).addClass("tb-verified");
   
		$("._5pbx.userContent",this).each(function(index){		
			charSum = charSum + $(this).text().length;
	   }); 
	   
	   if (charSum >= maxCharQuantity) {
		
			$(this).hide();
			
			// add div with warning message
	   		$(this).parent().append("<div class=\"textao-warning\">Textão bloqueado!<a href=\"#\">Visualizar</a></div>");
			$(this).addClass("tb-blocked");
			
			$(this).parent().find(".textao-warning a").click(function() {
				$(this).parent().hide();
				$(this).parent().parent().find(".tb-blocked").show();	
			});
	   }
   }); 
   
	
	//comments verification
	$(".UFICommentBody:not(.tb-comments-verified)").each(function(index){ //UFIRow
		
		var charSum = 0;

		$(this).addClass("tb-comments-verified");
		
		$("span",this).each(function(index){		
			charSum = charSum + $(this).text().length;
		}); 
		
		if (charSum >= maxCharQuantity) {
			//add div with warning message
			console.log($(this).parent().parent().parent().parent().parent().parent().parent().parent());
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().hide();
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().append("<div class=\"textao-warning\">Textão bloqueado!<a href=\"#\">Visualizar</a></div>");
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().addClass("tb-blocked");
			
			$(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find(".textao-warning a").click(function() {
				$(this).parent().hide();
				$(this).parent().parent().find(".tb-blocked").show();	
			});
		} 
		
	}); 
	   
	   
   }, 1000);
})( document );

