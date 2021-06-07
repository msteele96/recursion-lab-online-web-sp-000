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
string.reverse()
}

const isPalindrome = () => {

}

const addUpTo = () => {

}

const maxOf = () => {

}

const includesNumber = () => {

}
