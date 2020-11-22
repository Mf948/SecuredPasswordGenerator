// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var lowerCharacter = 'abcdefg';
var upperCharacter = 'ABCDE';
var numericCharacter = '0123456789'
var symbolCharacter = '!@#$%^&*())'
var possiblePassword = ''

function generatePassword() {
  var pwLength = prompt("choose a length of at least 8 characters and no more than 128 characters")

  if (pwLength < 8 || pwLength > 128) {
    alert("Password does not meet the required lenght");
    return;
  }

  var lowcon = confirm("do you want lower case in your password")
  var uppcon = confirm("do you want upper  case in your password")
  var numcon = confirm("do you want numeric symbol in your password")
  var speccon = confirm("do you want special caracter in your password")
 
  console.log('lowcon', lowcon);
  console.log('uppcon', uppcon);

  if(!lowcon && !uppcon && numcon === false && speccon === false){
        alert("at least one character type should be selected")
    return;
  }

//if they lower then add (concate) to possible password
if(lowcon){
  possiblePassword += lowerCharacter
}
//if they upper then add (concate) to possible password
if (uppcon){
  { possiblePassword += upperCharacter
}

//if they number then add (concate) to possible password
if(numcon){
  possiblePassword += numericCharacter
}
//if they special then add (concate) to possible password
if (speccon){
   possiblePassword += symbolCharacter
}
var password =" "

//loop through possiblePassword byt the pwLengh (second condition)

//inside Math.floor(Math.random() * possiblePassword.length)
for (var i =0; i < pwLength; i++){
  possiblePassword = possiblePassword + possiblePasswordVar[Math.floor(Math.random() * possiblePassword.length)];
  console.log('possiblePassword', possiblePassword)
}
return possiblePassword;

// get the random character 
}
console.log('possiblePassword',)


};

function writepossiblePassword() {
var possiblePassword = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
