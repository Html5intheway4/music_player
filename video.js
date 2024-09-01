document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('videoSelector').addEventListener('change', function() {
        const selectedVideo = this.value;
        const videoPlayer = document.getElementById('videoPlayer');

        if (selectedVideo) {
            videoPlayer.src = selectedVideo;
            videoPlayer.play();
        }
    });
});
