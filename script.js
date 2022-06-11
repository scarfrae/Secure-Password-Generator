// Assignment Code
//lower case letters (from a to z)
var lower_case_letters = []
//numbers array
var num = ["0", "1","2","3","4","6","7","8","9"]
//special characters
var special_char = ["0","1", ]
function generatePassword(){
  var prompt_one = prompt("Welcome message. How many characters long do you want your password to be?")
  if((prompt_one <= 128 && prompt_one >= 8) && (typeof prompt_one == 'number')){
    if(prompt_two){
      prompt_two = confirm("Do you want letters?")
      if(prompt_two){
        prompt_three = confirm("Do you want special characters (!, $, etc.)?")
      }
    }
  }
  else{
    alert("You need to have 8 and 128")
    generatePassword();
  }

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
