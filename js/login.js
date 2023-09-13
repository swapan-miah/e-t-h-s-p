const AllahHelpMe = "miahismail654@gmail.com";
const YaRohmanHelpMe = "123456";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the user's input email and password
  var userEmail = document.getElementById("email").value;
  console.log(userEmail);
  var userPassword = document.getElementById("password").value;
  console.log(userPassword);

  // Check if the email and password are correct
  if (userEmail === AllahHelpMe && userPassword == YaRohmanHelpMe) {
    // Redirect to the admin.html page
    window.location.href = "./admin_panel/dashboard.html";
    console.log("login successfull");
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});
