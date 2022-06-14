// Assignment Code
//lower case letters (from a to z)
var lowercase_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//uppercase letters (from A to Z)
var uppercase_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//numbers array
var num = ["0", "1","2","3","4","6","7","8","9"]
//special characters
var special_char = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","`","]","{","|", "}","~"]


function userInfo(){ 
  //1. prompt user for password criteria
  // a. password length: 8 < 128
  // b. numbers, special characters, uppercase, lowercase
  //2. validate user input 
  //3. generate password based on user critera
  //4. display password on page (return step in generatePassword)
  // parseInt allows prompt to be number instead of string
  var prompt_one = parseInt(prompt("Welcome! How many characters long do you want your password to be?"))
  // console.log(prompt_one);
  if(prompt_one <= 128 && prompt_one >= 8) {
  // && (typeof prompt_one == 'number'))

    var get_numbers = confirm("Do you want numbers?")
    var get_special_char = confirm("Do you want special characters (!, $, etc.)?")
    var get_uppercase = confirm("Do you want uppercase letters?")
    var get_lowercase = confirm("Do you want lowercase letters?")

    //console.log(get_numbers, get_special_char,  get_uppercase, get_lowercase);
    //if statement makes sure one choice occurs
    if(get_numbers === false && get_special_char === false && get_uppercase === false && get_lowercase === false ){
      alert("You need to make at least one choice!")
      userInfo();
    }

    //console.log(get_numbers, get_special_char,  get_uppercase, get_lowercase);

    var user_response = {
      num_response: get_numbers,
      char_response: get_special_char,
      upper_response: get_uppercase,
      lower_response: get_lowercase,
      length_char: prompt_one
    }
    console.log (user_response); 
    return user_response;

  }
  else{
    alert("Your response needs to be between 8 and 128")
    userInfo();
  }
}
function generatePassword() {
  var passwordArr = [];
  // if(num = true) (make global)
  //     //add numbers array into empty array
  //empty array for all user choices
  //empty string for al

  //calling function
  var use_options = userInfo();
  console.log (use_options);
  //if number response is true then create randomized function

  if(use_options.num_response){
    //add to empty array
    passwordArr = passwordArr.concat(num);
  }

  if(use_options.char_response){
    //add to empty array
    passwordArr = passwordArr.concat(special_char);
  }

  if(use_options.upper_response){
    //add to empty array
    passwordArr = passwordArr.concat(uppercase_letters);
  }

  if(use_options.lower_response){
    //add to empty array
    passwordArr = passwordArr.concat(lowercase_letters);
    console.log (passwordArr);
  }
  //i = incrementation variable
  //length_char is length of password that user chooses
  //
  let password = []; //emptu array
  for(var i = 0; i <= use_options.length_char; i++){
    var random_password_number = passwordArr[Math.floor(Math.random()*use_options.length_char)];
    console.log (random_password_number);
    
    user_password = password.push(random_password_number + i);
    //console.log (user_password);
    
  }
  return user_password;
  //passwordArr has all available char that can be used
  //create a loop to iterate over avaliable options ad based on options generate new array that is password
  //use forloop and then use random function within
  //Entire thing wrong
  // if(use_options.num_response){
  //   var random_num_array = num_response[Math.floor(Math.random()*length_char)]
  //   console.log (random_num_array);
  // }

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
