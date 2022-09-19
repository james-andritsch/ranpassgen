var lowCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.>?/|";
var numChar = "1234567890";
var passLength
var upCaseCheck
var specialCharCheck
var numCheck
var character = lowCaseChar;
console.log(character);


// Assignment Code
var generateBtn = document.querySelector("#generate");

function detLength() {
  passLength = prompt("Choose a password length between 8 and 128 characters.");
  if (isNaN(passLength)) {
    alert("You must enter a value between 8 and 128!");
    detLength();
  } else if (passLength < 8 || passLength > 128) {
    alert("Seriously. You need to enter a value between 8 and 128!");
    detLength();
  }
}

function detUpCase() {
  upCaseCheck = prompt("Would you like the password to contain an uppercase character? (Answer Yes or No)");
  if (upCaseCheck === "YES" || upCaseCheck === "yes" || upCaseCheck === "Yes") {
    upCaseCheck = true;
    return upCaseCheck;
  } else if (upCaseCheck === "NO" || upCaseCheck === "no" || upCaseCheck === "No") {
    upCaseCheck = false;
    return upCaseCheck;
  } else {
    alert("Please respond with Yes or No.");
    detUpCase
  }
  return upCaseCheck
}

function detSpecialChar() {
  specialCharCheck = prompt("Should this password contain special characters? (Yes or No)");
  if (specialCharCheck === "YES" || specialCharCheck === "yes" || specialCharCheck === "Yes") {
    specialCharCheck = true;
    return specialCharCheck;
  } else if (specialCharCheck === "NO" || specialCharCheck === "no" || specialCharCheck === "No") {
    specialCharCheck = false;
    return specialCharCheck;
  } else {
    alert("You must respond with Yes or No.");
    detSpecialChar();
  }
  return specialCharCheck
}

function detNum() {
  numCheck = prompt ("Should this password contain numbers? (Yes or No)");
  if (numCheck === "YES" || numCheck === "yes" || numCheck === "Yes") {
    numCheck = true;
    return numCheck;
  } else if (numCheck === "NO" || numCheck === "no" || numCheck === "No") {
    numCheck = false;
    return numCheck;
  } else {
    alert("You must respond with Yes or No.");
    detNum();
  }
  return numCheck
}

function generatePassword() {
  detLength();
  console.log(detLength);
  detUpCase();
  console.log(detUpCase);
  detSpecialChar();
  console.log(detNum);
  if (numCheck && upCaseCheck && specialCharCheck) {
    character +- numChar + upCaseChar + specialChar;
  } else if (numCheck && upCaseCheck) {
    character +- numChar +- upCaseChar;
  } else if (numCheck && specialCharCheck) {
    character +- numChar +- specialChar;
  } else if (upCaseCheck && specialCharCheck) {
    character +- upCaseChar +- specialChar;
  } else if (numCheck) {
    character +- numChar;
  } else if (upCaseCheck) {
    character +-upCaseChar;
  } else if (specialCharCheck) {
    character +- specialChar;
  }
  console.log(character)
  var password = "";
  for (var i = 0; i < passLength; i++) {
    password +- character.charAt(Math.floor(Math.random() * character.length))
  }
  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = [];
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
