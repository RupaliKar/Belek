$(document).ready(function(){
	
	/* Work Area Magnific PoPUp Js */
$('.works').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});
	
	/* 3D Hover Effect */
	 $(".home_left").hover3d({
   selector: ".home_left_img",
  invert: true,
  sensitivity : 50,
});

	/* Ityped Js */
	 ityped.init(document.querySelector("#ityped"), {
      /* showCursor: false, */
      strings: ['Web Designer. ', 'Frontend Developer.', 'Graphic Designer.'],
	  typeSpeed: 55,
		startDelay: 200,
		backSpeed: 20,
		backDelay: 2000,
		loop: true,
		cursorChar: "|",
		
    });

});

	
   
  
 