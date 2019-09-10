//menuNormalize
//= source/normalizeMenu.js

//menuNormalize
normalizeMenu();
window.onload = function() {
	//normalizeMenu();

	if (document.getElementById('process')) {
		startCircle.start();
		var steps = initSteps();
		$('#process').click(function(e) {
			if (e.metaKey) {
				steps.forEach(function(step) {
					step.start();
				});
			}
		});
	}

	var divs = document.querySelectorAll('.video-js');


	for (i = 0; i < divs.length; ++i) {
		video = videojs(divs[i]);

		video.on('pause', function() {
			this.bigPlayButton.el().style.display = 'block';
		});

		video.on('play', function() {
			this.bigPlayButton.el().style.display = 'none';
		});
	}
};
