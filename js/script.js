$(document).ready(function() {
    
    /* Fade in and out buttons */

	$('.navigationbar span, #accordion h3, .findme').mouseenter( function() {
		$(this).fadeTo('fast', 1);
	});
	$('.navigationbar span, #accordion h3, .findme').mouseleave( function() {
		$(this).fadeTo('fast', .5);
	});
  
  /* Open all external links in new window */
  
  $('a').attr("target", function() {
        if(this.host == location.host) return "_self"
        else return "_blank"; 
  });
	
});
