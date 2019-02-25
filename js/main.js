(() => {
	//create a variable stack and grab all the of the DOM elements from the page
	let aud = documnent.querySelector('audio'),
		play = documnent.querySelector('#playButton'),
		pause =  documnent.querySelector('#pauseButton'),
		rewind =  documnent.querySelector('rewindButton');

	//write the functions for the audio element
	function playAudio()
	{
		aud.play();
	}

	function pauseAudio()
	{
		aud.pause(true);
	}

	function rewindAudio()
	{
		aud.currentTime = 0;
	}

	//add event handling
	play.addEventListener("click", playAudio);
	pause.addEventListener("click", pauseAudio);
	rewind.addEventListener("click", rewindAudio);

})();