var firebaseConfig = {
  apiKey: "AIzaSyCIApB9yzBZk2NgEoEvKt5MvPrbH3avjLM",
  authDomain: "data-a5aae.firebaseapp.com",
  projectId: "data-a5aae",
  storageBucket: "data-a5aae.appspot.com",
  messagingSenderId: "350928410672",
  appId: "1:350928410672:web:f759883cca771cb4acb5f5",
  measurementId: "G-FSFSL3WCVR",
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("Collected Data");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("text");

  saveMessage(text);
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(text) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    number: text,
  });
}
