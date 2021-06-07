function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

const reverseString = (string) => {
  if (string.length < 2 ) {
    return string
  } else {
    reverseString(string.substring(1)) + string[0]
  }
}

const isPalindrome = () => {

}

const addUpTo = () => {

}

const maxOf = () => {

}

const includesNumber = () => {

}
