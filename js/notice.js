// Initialize Firebase (replace with your own Firebase config)
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

// Reference to your Firebase Storage folder (replace 'notice' with your folder name)
var storageRef = firebase.storage().ref("notice");

// Get a list of all items (PDFs) in the folder
storageRef
  .listAll()
  .then(async function (result) {
    console.log(result);
    var tableBody = document.getElementById("noticeTableBody");

    for (let index = 0; index < result.items.length; index++) {
      const item = result.items[index];
      console.log(item);

      // Get the file name
      const fileName = item.name;
      console.log(fileName);

      // Create a table row
      const row = document.createElement("tr");
      console.log(row);

      // Create a table cell for SI (serial number)
      const siCell = document.createElement("td");
      console.log(siCell);
      siCell.textContent = index + 1; // Add 1 to start counting from 1

      // Create a table cell for the file name
      const nameCell = document.createElement("td");
      nameCell.textContent = fileName;

      // Create a download link for the PDF
      const downloadLinkCell = document.createElement("td");
      const downloadLink = document.createElement("a");
      downloadLink.textContent = "Download";
      downloadLink.href = await item.getDownloadURL(); // Wait for the URL
      downloadLink.setAttribute("download", fileName); // Set the file name for download
      downloadLinkCell.appendChild(downloadLink);

      // Append cells to the row
      row.appendChild(siCell);
      row.appendChild(nameCell);
      row.appendChild(downloadLinkCell);

      // Append the row to the table body
      tableBody.appendChild(row);
    }
  })
  .catch(function (error) {
    console.error("Error listing items in the folder: ", error);
  });
