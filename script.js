// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var uppercaseOp = " ";
var lowercaseOp = " ";
var specialcharOp = " ";
var numOp = " ";
var passwordlength = " ";


// Function to prompt user for password options which asks user the type of password user wants
function getPasswordOptions() {
  uppercaseOp = confirm ("Do you want uppercase?");
  lowercaseOp = confirm ("Do you want lowercase?");
  specialcharOp = confirm ("Do you want special char?");
  numOp = confirm ("Do you want number?");
}


// Function for getting a random element from an array and counting the length of password as well
function getRandom(arr) {
var password = " "; 
for (var i = 0; i <passwordlength; i++) {
  password += arr[Math.floor(Math.random() * arr.length)];
}
// giving the output password
return password; 
}

// Function to generate password with user input
// recursion use in getPasswordOptions() function also checking if password contains uppercase character, lowercase character, number or special character
function generatePassword() {
 passwordlength = prompt ("Choose a number between 10 to 108"); 

if (passwordlength < 108 && passwordlength > 8){
  getPasswordOptions();
  var choicesarr = [ ];
  console.log(uppercaseOp);
if (uppercaseOp === true) {
  choicesarr.push.apply(choicesarr,upperCasedCharacters);
} 

if (lowercaseOp === true) {
  choicesarr.push.apply(choicesarr,lowerCasedCharacters);
} 

if ( specialcharOp === true) {
  choicesarr.push.apply(choicesarr,specialCharacters);
}

if ( numOp === true) {
  choicesarr.push.apply(choicesarr,numericCharacters);
}
console.log(choicesarr);
var lasPass = getRandom(choicesarr);
return lasPass;

} else {
  alert("Please chose a number between 10 to 108");
  generatePassword(); 
}

}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);