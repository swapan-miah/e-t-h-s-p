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

// Reference to your Firebase Storage folder (replace 'bbb' with your folder name)
var storageRef = firebase.storage().ref("ssc_board_result/");

// Get a list of all items in the folder
storageRef
  .listAll()
  .then(function (result) {
    result.items.forEach(function (item) {
      // Get the download URL for each image
      item
        .getDownloadURL()
        .then(function (url) {
          // Create an img element and set its src attribute
          var img = document.createElement("img");
          img.src = url;
          img.classList.add("img-fluid");

          // Append the img element to the imageGallery div
          document.getElementById("imageGallery").appendChild(img);
        })
        .catch(function (error) {
          console.error("Error getting download URL: ", error);
        });
    });
  })
  .catch(function (error) {
    console.error("Error listing items in the folder: ", error);
  });
