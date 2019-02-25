(() => {
	//create a variable stack and grab all the of the DOM elements from the page
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playButton'),
		pause =  document.querySelector('#pauseButton'),
		rewind =  document.querySelector('#rewindButton');
		track = document.querySelectorAll('.trackholder');

	//write the functions for the audio element
	function playAudio() {
		aud.play();
	}

	function pauseAudio() {
		aud.pause(true);
	}

	function rewindAudio() {
		aud.currentTime = 0;
	}

	function swapSource() {
		let currentTrack = this.dataset.currenttrack;
		aud.src = `audio/${currentTrack}`;
		aud.load();
		aud.play();
	}

	//add event handling
	play.addEventListener("click", playAudio);
	pause.addEventListener("click", pauseAudio);
	rewind.addEventListener("click", rewindAudio);

	track.forEach(track => track.addEventListener("click", swapSource));

})();