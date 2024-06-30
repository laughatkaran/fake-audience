let currentAudio = null;

function playRandomAudio() {
    const audioFiles = [
        'audio/aww.wav',
        'audio/laugh-big.wav',
        'audio/laugh-medium.wav',
        'audio/laugh-small.wav',
        'audio/silence.wav'
    ];
    
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    
    // Stop the currently playing audio if there is one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // Play a new random audio
    currentAudio = new Audio(audioFiles[randomIndex]);
    currentAudio.play();
}
