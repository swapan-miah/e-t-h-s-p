// Initialize Firebase (make sure to replace with your own Firebase config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase (replace with your own Firebase config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjm5AeCiIwdasTRNqEQutMg22iXeU4IsM",
  authDomain: "amphs-e2aa7.firebaseapp.com",
  projectId: "amphs-e2aa7",
  storageBucket: "amphs-e2aa7.appspot.com",
  messagingSenderId: "1069974445580",
  appId: "1:1069974445580:web:d3179de0960542015d1829",
  measurementId: "G-7TS2P6HX3R",
};

firebase.initializeApp(firebaseConfig);
const videoContainer = document.getElementById("single_video_container");

// Reference to your Firebase Storage folder (replace 'bbb' with your folder name)
var storageRef = firebase.storage().ref("video/");

// Get a list of all items in the folder
storageRef
  .listAll()
  .then(function (result) {
    console.log(result);
    result.items.forEach(function (item) {
      // Get the download URL for each image
      item
        .getDownloadURL()
        .then(function (url) {
          // Create a video element and set its source to the download URL
          const videoElement = document.createElement("video");
          videoElement.src = url;
          videoElement.controls = true; // Add video controls (play, pause, etc.)
          videoElement.classList.add("img-fluid");

          // Append the video element to the container
          videoContainer.appendChild(videoElement);
        })
        .catch(function (error) {
          console.error("Error getting download URL: ", error);
        });
    });
  })
  .catch(function (error) {
    console.error("Error listing items in the folder: ", error);
  });
