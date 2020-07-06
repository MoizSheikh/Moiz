(function(window) {
	var byeSpeaker = {};
	var speakWord = "Bye";
	byeSpeaker.speak = function (names) {
	  console.log(speakWord + " " + names);
	}
	window.byeSpeaker = byeSpeaker;
	}
)(window);

