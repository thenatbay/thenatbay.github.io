// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		id: "100032730001215739040", // charliekmcmahon
	},
	{ // Object @ 1 index
		id: "114252005506563479771", //charlie m
	},
	{ // Object @ 2 index
		id: "112909034692413764594" //sam p
	},
	{
		id: "105631852417964529632" //louis
	}

]

var userID = "null"

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	userID = profile.getId();
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
  var friendlyName = profile.getName()
	getInfo()
  //console.log(friendlyName+ " is logged in!!!");
  //document.getElementById("output_label").style.display = "block";
  //document.getElementById("output_label").style.color = "#77dd77";
  //document.getElementById('output_label').innerHTML = "Successfully logged in. Redirecting.";
  //setTimeout(function(){window.location.replace("./main.html");}, 2050);
  //window.location.replace("./main.html");
}

function getInfo() {

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(userID == objPeople[i].id) {
			console.log(username + " is logged in!!!");
      document.getElementById("output_label").style.display = "block";
      document.getElementById("output_label").style.color = "#77dd77";
      document.getElementById('output_label').innerHTML = "Successfully logged in. Redirecting.";
      setTimeout(function(){window.location.replace("./main.html");}, 1250);
			return
		}
	}
  document.getElementById("output_label").style.display = "block";
  document.getElementById("output_label").style.color = "#ff6961";
  document.getElementById('output_label').innerHTML = "You are not authorised to access Nateflix.";
	console.log("not authorised")
}
document.getElementById("output_label").style.display = "none";
