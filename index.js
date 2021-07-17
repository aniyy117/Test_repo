// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCIApB9yzBZk2NgEoEvKt5MvPrbH3avjLM",
  authDomain: "data-a5aae.firebaseapp.com",
  projectId: "data-a5aae",
  storageBucket: "data-a5aae.appspot.com",
  messagingSenderId: "350928410672",
  appId: "1:350928410672:web:f759883cca771cb4acb5f5",
  measurementId: "G-FSFSL3WCVR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("contactformmessages");

$("#contactForm").submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    message: $(".number").val(),
  });
});
