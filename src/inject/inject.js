chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		(function(){
	    var images = [];
	    $("img").each(function(){
	      images.push($(this).attr('src'))
	    })
			cmb = Combinatorics.bigCombination(images, 2);
			while(images = cmb.next()) {
			 var imagesA = images.slice(0,1);
			 var imagesB = images.slice(1,2);
			 var file = imagesA.toString();
			 var file2 = imagesB.toString();

			 var diff = resemble(file).compareTo(file2).ignoreColors().onComplete(function(data){

		 if(data.misMatchPercentage == 0){
			 $("img:contains('" + $(this) + "')").addClass("on");
			 } else {
				 console.log('different');
			 }

	 });


			}



	  })()






	}
	}, 10);
});
