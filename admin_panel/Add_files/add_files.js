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

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const inp1 = document.querySelector(".inp1");
const progressbar1 = document.querySelector(".progress1");
const img1 = document.querySelector(".img1");
const fileData1 = document.querySelector(".filedata1");
const loading1 = document.querySelector(".loading1");
let file1;
let fileName1;
let progress1;
let isLoading1 = false;
let uploadedFileName1;
const selectImage1 = () => {
  inp1.click();
};
const getImageData1 = (e) => {
  file1 = e.target.files[0];
  fileName1 = Math.round(Math.random() * 9999) + file1.name;
  if (fileName1) {
    fileData1.style.display = "block";
  }
  fileData1.innerHTML = fileName1;
  console.log(file1, fileName1);
};

const uploadImage1 = () => {
  loading1.style.display = "block";
  const storageRef1 = storage.ref().child("notice");
  const folderRef1 = storageRef1.child(fileName1);
  const uploadtask1 = folderRef1.put(file1);
  uploadtask1.on(
    "state_changed",
    (snapshot1) => {
      console.log("snapshot1", snapshot1.ref.name);
      progress1 = (snapshot1.bytesTransferred / snapshot1.totalBytes) * 100;
      progress1 = Math.round(progress1);
      progressbar1.style.width = progress1 + "%";
      progressbar1.innerHTML = progress1 + "%";
      uploadedFileName1 = snapshot1.ref.name;
    },
    (error1) => {
      console.log(error1);
    },
    () => {
      storage
        .ref("notice")
        .child(uploadedFileName1)
        .getDownloadURL()
        .then((url) => {
          console.log("URL", url);
          if (!url) {
            img1.style.display = "none";
          } else {
            img1.style.display = "block";
            loading1.style.display = "none";
          }
          img1.setAttribute("src", url);
        });
      console.log("File Uploaded Successfully");
    }
  );
};

// -------------------------------2-------------------

const inp2 = document.querySelector(".inp2");
const progressbar2 = document.querySelector(".progress2");
const img2 = document.querySelector(".img2");
const fileData2 = document.querySelector(".filedata2");
const loading2 = document.querySelector(".loading2");
let file2;
let fileName2;
let progress2;
let isLoading2 = false;
let uploadedFileName2;
const selectImage2 = () => {
  inp2.click();
};
const getImageData2 = (e) => {
  file2 = e.target.files[0];
  fileName2 = Math.round(Math.random() * 9999) + file2.name;
  if (fileName2) {
    fileData2.style.display = "block";
  }
  fileData2.innerHTML = fileName1;
  console.log(file2, fileName2);
};

const uploadImage2 = () => {
  loading2.style.display = "block";
  const storageRef2 = storage.ref().child("result");
  const folderRef2 = storageRef2.child(fileName2);
  const uploadtask2 = folderRef2.put(file2);
  uploadtask2.on(
    "state_changed",
    (snapshot2) => {
      console.log("snapshot2", snapshot2.ref.name);
      progress2 = (snapshot2.bytesTransferred / snapshot2.totalBytes) * 100;
      progress2 = Math.round(progress2);
      progressbar2.style.width = progress2 + "%";
      progressbar2.innerHTML = progress2 + "%";
      uploadedFileName2 = snapshot2.ref.name;
    },
    (error2) => {
      console.log(error2);
    },
    () => {
      storage
        .ref("result")
        .child(uploadedFileName2)
        .getDownloadURL()
        .then((url) => {
          console.log("URL", url);
          if (!url) {
            img2.style.display = "none";
          } else {
            img2.style.display = "block";
            loading2.style.display = "none";
          }
          img2.setAttribute("src", url);
        });
      console.log("File Uploaded Successfully");
    }
  );
};
