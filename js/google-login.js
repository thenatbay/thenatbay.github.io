function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  var friendlyName = profile.getName()
  console.log(friendlyName+ " is logged in!!!");
  document.getElementById("output_label").style.display = "block";
  document.getElementById("output_label").style.color = "#77dd77";
  document.getElementById('output_label').innerHTML = "Successfully logged in. Redirecting.";
  //setTimeout(function(){window.location.replace("./main.html");}, 2050);
  //window.location.replace("./main.html");
}
