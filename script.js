// Assignment Code
var generateBtn = document.querySelector("#generate");
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword()  {
  // assigning code
  var lowercase ="abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+~|{}[]<>.,-=";

  lowercaseInput = document.querySelector("lowercase");
    uppercaseInput = document.getElementById("uppercase");
    numericInput = document.querySelector("numeric");
    specialInput = document.getElementById("special");
  
  // When button is clicked a series of prompts will come up //
  var passwordLength = prompt("Choose length of your password?");

  // if user inputs password between 8 and 128.
  if (passwordLength >= 8 && passwordLength <=128) {
    console.log(passwordLength)
  } else {
    prompt("Your password length must be between 8 and 128 characters.");
  }

  // if user chooses to have lowercase.//
  prompt("Would you like lowercase in your password?");
  if (lowercaseInput) {
  }
  // if user chooses to have uppercase.//
  prompt("Would you like uppercase in your password?");
  if (uppercaseInput) {
  } 
  // if user chooses to have numeric characters.//
  prompt("Would you like numeric characters in your password?");
  if (numericInput) {
  }

  // if user chooses to have special characters.//
  prompt("Would you like special characters in your password?");
  if (specialInput) {
  }
  
  //add password to textbox/display area
  document.getElementsByClassName("display").value = password;


}
// assign function to all conditions
function lowercaseInput(){
      return lowercase[Math.floor(Math.random() * lowercase.length)]
}
function lowercaseInput(){
  return lowercase[Math.floor(Math.random() * lowercase.length)]
}
function lowercaseInput(){
  return lowercase[Math.floor(Math.random() * lowercase.length)]
}
function lowercaseInput(){
  return lowercase[Math.floor(Math.random() * lowercase.length)]
}
