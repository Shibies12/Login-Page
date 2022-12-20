function validateform() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "shibi" && password == "shibi1999") {
    window.open("https://www.indiatoday.in/");
  } else {
    alert("Access Denied");
  }
}
