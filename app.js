const vinyl = document.getElementById('vinyl');
const audio = document.getElementById('audio');

vinyl.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    vinyl.classList.add('playing'); 
  } else {
    audio.pause();
    // audio.currentTime = 0;
    vinyl.classList.remove('playing');
  }
});

