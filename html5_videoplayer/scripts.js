// get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = Array.from(player.querySelectorAll('.player__slider'));

// build functions 

function toggleVideo(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function changePlaybackRate(){
    video[this.name] = this.value;
}

function updateButton(){
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleProgressChanges(event){
    const newTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = newTime;
}


// hook up event listners 
toggle.addEventListener('click', toggleVideo);
video.addEventListener('click', toggleVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => {button.addEventListener('click', skip);});

ranges.forEach(range => {
    console.log(range);
    range.addEventListener('change', changePlaybackRate);
    range.addEventListener('mousemove', changePlaybackRate);
});

let mousedown = false;
progress.addEventListener('click', handleProgressChanges);
progress.addEventListener('mousemove',(e) => mousedown && handleProgressChanges(e));
progress.addEventListener('mousedown', mousedown = true);
progress.addEventListener('mouseup', mousedown = false);