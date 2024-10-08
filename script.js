// Example link to the m3u8 manifest
const videoManifestUrl = 'https://sp.cdnsimba.com.br/bpk-tv/Sbt01/default/index.m3u8';


function loadVideo() {
    const video = document.getElementById('videoPlayer');

    // Ensure the video is muted for autoplay to work
    video.muted = true;

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoManifestUrl);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoManifestUrl;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    } else {
        alert('Seu navegador não suporta HLS.');
    }
}

// Call the function to load and play the video
loadVideo();
