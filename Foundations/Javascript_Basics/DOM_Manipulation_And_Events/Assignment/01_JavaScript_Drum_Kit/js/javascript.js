window.addEventListener('keydown', e => {
    const audio = document.querySelector(`audio[data-key="${e.key.charCodeAt(0)}"]`);
    const key = document.querySelector(`.key[data-key="${e.key.charCodeAt(0)}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle('playing');
});

window.addEventListener('keyup', e => {
    const key = document.querySelector(`.key[data-key="${e.key.charCodeAt(0)}"]`);
    key.classList.toggle('playing');
});