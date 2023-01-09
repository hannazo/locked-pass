// Assignment code here

// Declare variable arrays
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLettersArray = String.prototype.toUpperCase.apply(lettersArray).split(",");
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharArray = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

//Length selection (min 8 and max 128, numbers only)
var passwordLength;

function lengthSelection() {
  passwordLength = window.prompt("Please select the length between 8 and 128 for your password");
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Invalid input. Please select a number between 8 and 128");
  }

  confirm("Your password will be " + passwordLength + " characters long");
  return;
}
lengthSelection();
console.log("Password is " + passwordLength + " characters long");

//Password criteria selection (must select at least one option)
var lowercase;
var uppercase;
var numbers;
var specialChar;

function criteriaSelection() {
  alert("Please select at least one of the following options");
  lowercase = confirm("Would you like to include lowercase characters?");
  uppercase = confirm("Would you like to include uppercase characters?");
  numbers = confirm("Would you like to include numbers?");
  specialChar = confirm("Would you like to include special characters");
  //Loop until at least one of the options is selected
  while (!lowercase && !uppercase && !numbers && !specialChar) {
    alert("Invalid input. Please select at least one of the following options");
    lowercase = confirm("Would you like to include lowercase characters?");
    uppercase = confirm("Would you like to include uppercase characters?");
    numbers = confirm("Would you like to include numbers?");
    specialChar = confirm("Would you like to include special characters");
  }

  //Confirm selection
  if (lowercase && !uppercase && !numbers && !specialChar) {
    confirm("Your password will include lowercase characters only");
  }
  else if (!lowercase && uppercase && !numbers && !specialChar) {
    confirm("Your password will include lowercase characters only");
  }
  else if (!lowercase && !uppercase && numbers && !specialChar) {
    confirm("Your password will include numbers only");
  }
  else if (!lowercase && !uppercase && !numbers && specialChar) {
    confirm("Your password will include special characters only");
  }
  else if (lowercase && uppercase && !numbers && !specialChar) {
    confirm("Your password will include lowercase and uppercase characters");
  }
  else if (lowercase && !uppercase && numbers && !specialChar) {
    confirm("Your password will include lowercase characters and numbers");
  }
  else if (lowercase && !uppercase && !numbers && specialChar) {
    confirm("Your password will include lowercase and special characters");
  }
  else if (!lowercase && uppercase && numbers && !specialChar) {
    confirm("Your password will include uppercase characters and numbers");
  }
  else if (!lowercase && uppercase && !numbers && specialChar) {
    confirm("Your password will include uppercase and special characters");
  }
  else if (!lowercase && !uppercase && numbers && specialChar) {
    confirm("Your password will include numbers and special characters");
  }
  else if (lowercase && uppercase && numbers && !specialChar) {
    confirm("Your password will include lowercase, uppercase characters and numbers");
  }
  else if (lowercase && uppercase && !numbers && specialChar) {
    confirm("Your password will include lowercase, uppercase and special characters");
  }
  else if (lowercase && !uppercase && numbers && specialChar) {
    confirm("Your password will include lowercase, special characters and numbers");
  }
  else if (!lowercase && uppercase && numbers && specialChar) {
    confirm("Your password will include uppercase, special characters and numbers");
  }
  else {
    confirm("Your password will include lowercase, uppercase, special characters and numbers");
  }
  return;
}
criteriaSelection();
console.log("Lowercase option was selected: " + lowercase);
console.log("Uppercase option was selected: " + uppercase);
console.log("Numbers option was selected: " + numbers);
console.log("Special characters option was selected: " + specialChar);

//Generate Password
function generatePassword() {

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* TO DO:

1. PROMPT FOR USER INPUT WHEN "GENERATE PASSWORD" BUTTON IS CLICKED
2. SELECT WHICH CRITERIA TO INCLUDE
  *LENGTH
3. SELECT PASSOWRD LENGTH MIN 8 AND MAX 128 CHARACTERS WHEN PROMPTED
  *CHARACTER TYPES (AT LEAST ONE SHOULD BE SELECTED)
4. SELECT IF LOWERCASE CHARACTERS INCLUDED
5. SELECT IF UPPERCASE CHARACTERS INCLUDED
6. SELECT IF NUMERIC CHARACTERS INCLUDED
7. SELECT IF SPECIAL CHARACTERS INCLUDED
8. VALIDATE USER INPUT
9. PASSWORD GENERATED AND MATCHS SELECTED CRITERIA
10. PASSWORD DISPLAYED IN ALERT OR WRITTEN TO THE PAGE
*/