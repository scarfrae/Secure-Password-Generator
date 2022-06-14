// Assignment Code
//lower case letters (from a to z)
var lowercase_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//uppercase letters (from A to Z)
var uppercase_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//numbers array
var num = ["0","1","2","3","4","6","7","8","9"]
//special characters
var special_char = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","`","]","{","|","}","~"]


function generatePassword(){ 
  var passwordArr = [];
  //1. prompt user for password criteria
  // a. password length: 8 < 128
  // b. numbers, special characters, uppercase, lowercase
  //2. validate user input 
  //3. generate password based on user critera
  //4. display password on page (return step in generatePassword)
  // parseInt allows prompt to be number instead of string
  var length_char = parseInt(prompt("Welcome! How many characters long do you want your password to be?"))
  // console.log(length_char);
  if((length_char <= 128 && length_char >= 8) && (typeof length_char == 'number')){
  
    //user prompts
    var get_numbers = confirm("Do you want numbers?")
    var get_special_char = confirm("Do you want special characters (!, $, etc.)?")
    var get_uppercase = confirm("Do you want uppercase letters?")
    var get_lowercase = confirm("Do you want lowercase letters?")

    //console.log(get_numbers, get_special_char,  get_uppercase, get_lowercase);
    //if statement makes sure one choice occurs
    if(get_numbers === false && get_special_char === false && get_uppercase === false && get_lowercase === false ){
      alert("You need to make at least one choice!")
      generatePassword();
    }

    if(get_numbers){
      //add to passwordArr array
      passwordArr = passwordArr.concat(num);
    }
    console.log (passwordArr);
  
    if(get_special_char){
      //add to passwordArr array
      passwordArr = passwordArr.concat(special_char);
    }
  
    if(get_uppercase){
      //add to passwordArr array
      passwordArr = passwordArr.concat(uppercase_letters);
    }
  
    if(get_lowercase){
      //add to passwordArr array
      passwordArr = passwordArr.concat(lowercase_letters);
      console.log (passwordArr);
    }

    let password = []; //empty array
    for(var i = 0; i < length_char; i++){
      var random_password_char = passwordArr[Math.floor(Math.random()*passwordArr.length)];
      // console.log (random_password_char);
      password.push(random_password_char);
      console.log (password);
    }
    var userPassword = password.join('');
    return userPassword;

  }
  else{
    alert("Your response needs to be between 8 and 128 char and a numerical value")
    generatePassword();
  }
}

//button to start password gen.
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
