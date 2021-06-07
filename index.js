function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true;
  } else if (string[0] === string[string.length -1]) {
    return isPalindrome(string.substring(1, string.length-1))
  } else {
    return false
  }
}

function addUpTo(array) {

}
