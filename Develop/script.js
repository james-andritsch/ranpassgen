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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
