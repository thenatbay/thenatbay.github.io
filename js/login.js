// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "nateflix"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]
function onSignIn() {
  //var profile = googleUser.getBasicProfile();
  //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //console.log('Name: ' + profile.getName());
  //console.log('Image URL: ' + profile.getImageUrl());
  //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	document.getElementById("output_label").style.display = "block";
	document.getElementById("output_label").style.color = "#77dd77";
	document.getElementById('output_label').innerHTML = "Successfully logged in. Redirecting.";
	setTimeout(function(){window.location.replace("./main.html");}, 1250);
}

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!");
      document.getElementById("output_label").style.display = "block";
      document.getElementById("output_label").style.color = "#77dd77";
      document.getElementById('output_label').innerHTML = "Successfully logged in. Redirecting.";
      setTimeout(function(){window.location.replace("./main.html");}, 1250);
      //
			// stop the function if this is found to be true
			return
		}
	}
  document.getElementById("output_label").style.display = "block";
  document.getElementById("output_label").style.color = "#ff6961";
  document.getElementById('output_label').innerHTML = "Incorrect username or password.";
	console.log("incorrect username or password")
}
document.getElementById("output_label").style.display = "none";
