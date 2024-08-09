// Example link to the manifest or video source
const videoManifestUrl = 'https://sp.cdnsimba.com.br/bpk-tv/Record01/default/index.m3u8';

// Function to load and play the video
function loadVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Here you would normally process the manifest if necessary,
    // or directly set the video source if it's already processed.
    videoPlayer.src = videoManifestUrl;
    videoPlayer.load();
    videoPlayer.play();
}

// Call the function to load and play the video
loadVideo();
