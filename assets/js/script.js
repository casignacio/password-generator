// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passwordLength = 0;
  let includeLowercase = false;
  let includeUppercase = false;
  let includeNumeric = false;
  let includeSpecialChars = false;
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numericChars = "0123456789";
  let specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let possibleChars = "";

  // Prompt the user for password criteria and validate the input
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("How long would you like your password to be? (Between 8 and 128 characters)"));
  }

  includeLowercase = confirm("Would you like to include lowercase letters?");
  includeUppercase = confirm("Would you like to include uppercase letters?");
  includeNumeric = confirm("Would you like to include numeric characters?");
  includeSpecialChars = prompt("Would you like to include special characters? (Yes/No)", "No").toLowerCase() === "yes";

  // console.log(includeLowercase, includeUppercase, includeNumeric, includeSpecialChars)

  if (includeLowercase) {
    possibleChars += lowercaseChars;
  }
  if (includeUppercase) {
    possibleChars += uppercaseChars;
  }
  if (includeNumeric) {
    possibleChars += numericChars;
  }
  if (includeSpecialChars) {
    possibleChars += specialChars;
  }

  // If no character types were selected, default to lowercase letters only
  if (!possibleChars) {
    possibleChars = lowercaseChars;
  }

  // Generate a random password using the selected characters
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return password;
}
