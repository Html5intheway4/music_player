document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('musicSelector').addEventListener('change', function() {
        const selectedSong = this.value;
        const audioPlayer = document.getElementById('audioPlayer');

        if (selectedSong) {
            audioPlayer.src = selectedSong;
            audioPlayer.play();
        }
    });
});
