let currentAudio = null;

function playRandomAudio() {
    const audioFiles = [
        'audio/01-medium-laugh.wav',
        'audio/02-small-laugh.wav',
        'audio/03-fake-laugh.wav'
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
