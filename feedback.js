const firebaseConfig = {
    apiKey: "AIzaSyDa43vnDFOVL2aoYEqmEOdlVSB1c9TEsQk",
    authDomain: "musicplayer-2369d.firebaseapp.com",
    databaseURL: "https://musicplayer-2369d-default-rtdb.firebaseio.com",
    projectId: "musicplayer-2369d",
    storageBucket: "musicplayer-2369d.appspot.com",
    messagingSenderId: "649797818832",
    appId: "1:649797818832:web:05e25d5d6a29e6aa1e01d5"
  };

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var musicplayerDB = firebase.database().ref("musicplayer");

document.getElementById("musicplayer").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var comment = getElementVal("comment");
    saveMessages(name, email, comment);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("musicplayer").reset();
}
const saveMessages = (name, email, comment) => {
    var newmusicplayer = musicplayerDB.push();
  
    newmusicplayer.set({
      name: name,
      email: email,
      comment: comment,
    });
  };
const getElementVal = (id) => {
    return document.getElementById(id).value;
};