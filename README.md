# Music Player Website
This repository contains the code for a simple website designed to play music. Below are the key technical aspects and implementations used in this project.
## Features and Technical Details

### 1. Simple Website for Music Player
The core functionality of this website is to provide a user-friendly interface for playing music. The user can navigate through different tracks, play, pause, and select specific audio or video files.

### 2. Important Technical Components
Several technologies and tools were employed in building this website, including HTML, CSS, JavaScript, and Firebase for backend services.

### 3. Firebase for Feedback
Firebase is used to handle user feedback. We implemented a real-time feedback system where users can submit comments, and these are stored in a Firebase Realtime Database. The feedback is instantly available across all sessions due to Firebase’s real-time syncing.

**Initialize Firebase:**
```javascript
firebase.initializeApp(firebaseConfig);
```
**Submit Feedback:**
```
firebase.database().ref('feedback').push().set({ comment: feedback });
```

### 4. Navigation Bar Manipulation
The navigation bar is dynamically manipulated using JavaScript. Depending on the user's interaction, the navigation bar adapts to show different options for audio and video selections.

```javascript
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('musicSelector').addEventListener('change', function() {
        const selectedSong = this.value;
        const audioPlayer = document.getElementById('audioPlayer');
```

### 5. Site Designing using CSS
The overall design and layout of the site are crafted using CSS. We used responsive design techniques to ensure the site looks good on all devices, with a focus on creating a clean and minimalistic user interface.
https://github.com/Html5intheway4/music_player/blob/master/music.css
https://github.com/Html5intheway4/music_player/blob/master/simple_website.css
https://github.com/Html5intheway4/music_player/blob/master/video.css
https://github.com/Html5intheway4/music_player/blob/master/feedback.css

### 6. Selection Tab in Audio and Video Navigation Bar
The selection tab allows users to choose between audio and video files. It’s designed to be intuitive, giving a clear indication of the currently selected media type.

```html
<select id="musicSelector" class="select-selected">
                <option value="" disabled selected>Select a song...</option>
                <option value="295.mp3">295</option>
                <option value="Shubh  Baller Official Music Video.mp3">Shubh  Baller Official Music</option>
                <option value="ACRAZE  Do It To It Ft Cherish.mp3">ACRAZE  Do It To It Ft Cherish</option>
```

### 7. Designing the Selection Tab
The selection tab is designed using CSS, with special attention to active states, hover effects, and transitions to enhance user experience.

```css
.selection{
    position: absolute;
    top: 35%;
    left: 38%;
}
.select-selected {
    background-color: rgb(183, 205, 250);
    font-family: cursive;
    font-size: x-large;
    margin-top: 150px;
  }
```

### 8. Running Video and Audio with JavaScript
JavaScript is utilized to control the playback of audio and video files. This includes functions for play, pause, and track selection, ensuring a seamless media playback experience.

```javascript
if (selectedVideo) {
            videoPlayer.src = selectedVideo;
            videoPlayer.play();
        }
```

### 9. Feedback: Accessing All Comments in Real-Time with Realtime Database and Firestore
To manage feedback, we integrated both Firebase Realtime Database and Firestore. This allows for flexible data handling, where Realtime Database provides instant syncing, and Firestore offers advanced querying capabilities.
https://console.firebase.google.com/

https://github.com/Vetrivel-VP/contact_form_firebase

https://youtu.be/RAWHXRTKTHw?si=aCGO6tIpQOtGgzzY

### 10. Building and Deploying the Site with GitHub Pages
The site is built and deployed using GitHub Pages. GitHub Pages allows us to host the website directly from this repository. We configured the build process to automatically deploy updates whenever the code is pushed.
https://youtube.com/shorts/Kq28yBigDYw?si=_4nC8rhj9vwi2W1u

