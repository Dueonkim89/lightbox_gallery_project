$('.image-gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
   image: {
            titleSrc: 'alt' 
   },
  gallery:{enabled:true}
  
});

//keywords to look for
var keyWords = [
"Hay Bales", "Clouds", "Dirt", "Wheat", "Straws", "Straw Field", "Hay", "Hay Field", "Straw", 
"Hays", "Grass", "Brown", "Blue", "Countryside", "Lake", "Ocean", "Water", "Hike", "Mountain", "Canyon", 
"Cloudy", "Canyons", "Iceberg", "Ice", "Cold", "Arctic", "Freezing", "Snow", "White", "Mountains", "Cliffs", 
"Red Cliffs", "Desert", "Red", "Orange", "Sunny", "Warm", "Hot", "Fall", "Leaves", "Yellow", "Plantation", "Valley", 
"Sky", "Plants", "Sand Dunes", "Sand", "Oregon", "Oregon Coast", "Countryside Lane", "Circle", "Bushes", 
"Path", "Sunset", "Coast", "Waves", "Cave", "View", "Dirt Road", "Road", "Landscape", 
"Trees", "Green", "Cloud", "Forest", "BlueBells", "Meadow", "Violet", "Field", "Hill", "Hills", "Fog", "Purple", 
"Plant", "Sun", "Tree"
];

//Sync appropriate data to each parent div of images
$('#hay-bales').data("searchWords", ["Hay Bales", "Clouds", "Plains", "Trees", "Dirt", "Wheat", "Straws", "Straw Field", "Hay", 
	"Hay Field", "Straw", "Hays", "Green", "Grass", "Brown", "Blue", "Hill", "Sky", "Countryside", "Sunny", "Tree", "Cloud"]);
$('#lake').data("searchWords", ["Lake", "Clouds", "Ocean", "Water", "White", "Mountains", "Mountain", "Sky", "Snow", "Blue", "Cloud"]);
$('#canyon').data("searchWords", ["Hike", "Mountain", "Canyon", "Trees", "Green", "Sky", "Cloudy", "Clouds", "Canyons", "Tree", "Cloud"]);
$('#iceberg').data("searchWords", ["Iceberg", "Ice", "Cold", "Arctic", "Freezing", "Blue", "Sky", "Clouds", "Snow", "White", "Cloud"]);
$('#desert').data("searchWords", ["Mountain", "Mountains", "Cliffs", "Red Cliffs", "Desert", "Canyons", "Red", "Orange", 
	"Trees", "Sunny", "Warm", "Hot", "Canyon", "Sun", "Tree", "Sand", "Yellow", "Cloud"]);
$('#fall').data("searchWords", ["Fall", "Trees", "Leaves", "Green", "Yellow", "Tree"]);
$('#plantation').data("searchWords", ["Plantation", "Green", "Valley", "Grass", "Water", "Sky", "Clouds", "Trees", "Dirt", "Plants", "Tree", "Cloud"]);
$('#dunes').data("searchWords", ["Sand Dunes", "Sand", "Oregon", "Oregon Coast", "Sky", "Clouds", "Grass", "Cloud", "Blue"]);
$('#countryside').data("searchWords", ["Countryside Lane", "Trees", "Circle", "Road", "Bushes", "Green", "Leaves", "Path", "Tree"]);
$('#sunset').data("searchWords", ["Ocean", "Water", "Sunset", "Orange", "Coast", "Trees", "Sky", "Red", "Cliffs", 
"Waves", "Sun", "Tree", "Cloud", "Blue"]);
$('#cave').data("searchWords", ["Cave", "View", "Dirt Road", "Road", "Landscape", "Trees", "Green", "Clouds", "Cloud", 
	"Sky", "Grass", "Forest", "Tree", "Cloud"]);
$('#bluebells').data("searchWords", ["BlueBells", "Meadow", "Mountain", "Mountains", "Violet", "Field", "Snow", "Trees", "Hill", 
	"Hills", "Fog", "Grass", "Purple", "Plants", "Plant", "Tree", "Cloud"]);
	
	
//improved search function
$("#search-box").keyup(function() {
	var filter = $(this).val();
	var eachImageParentDiv = $('.image-gallery div');
		
	function findParentElement(keyword) {
		$(eachImageParentDiv).each(function( index ) {
			var parentElement = $(this);
			var relevantData = $(this).data("searchWords");
			if (relevantData.indexOf(keyword) === -1) {
				parentElement.addClass("hidden");
			}
		});
	};		    
	
	$.each( keyWords, function(index, value) {
		if ( filter.toLowerCase() === value.toLowerCase() ) {
			findParentElement(value);
			return false; //this is used to stop the for loop once keyword is found
		} else if (filter === '') {
			$('div').removeClass("hidden")
			$('.image-gallery img').show();
		}
	});		
  
});