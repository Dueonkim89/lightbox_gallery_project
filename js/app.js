$('.image-gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
   image: {
            titleSrc: 'alt' 
   },
  gallery:{enabled:true}
  
});

/*
$( function() {
    var availableTags = [
      "Hay Bales",
      "Lake",
      "Canyon",
      "Iceberg",
      "Desert",
      "Fall",
      "Plantation",
      "Dunes",
      "Countryside Lane",
      "Sunset",
      "Cave",
      "Bluebells"
    ];
    $( "#search-box" ).autocomplete({
      source: availableTags
    });
  } );
 */ 
  
 $("#search-box").keyup(function() {
  
  var filter = $(this).val();
    
  $('.image-gallery').find("img").each(function() {
	  if ( filter.toLowerCase() === $( this ).attr("alt").toLowerCase() ) {
		  $(this).show();
	  } else if (filter === '') {
		  $('.image-gallery img').show();
	  }
	  else {
		  $(this).fadeOut();
	  }
	});   
  
 });