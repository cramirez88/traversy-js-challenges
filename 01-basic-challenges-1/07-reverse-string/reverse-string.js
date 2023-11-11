function reverseString(str) {
  // takes in a string and return the reverse of that string
  let newString = ''
  for(let i = str.length - 1; i >= 0; i--){
    newString += str[i]
  }
  return newString
}

module.exports = reverseString;
