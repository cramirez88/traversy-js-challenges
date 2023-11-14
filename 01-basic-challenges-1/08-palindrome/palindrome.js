function isPalindrome(str) {
  let first = removeNonAlphaNumeric(str.toLowerCase())
  let second = comparativeString(first)
  return first === second
}


// function that returns a string with only alphanumeric characters
function removeNonAlphaNumeric(str){
  let nonAlphaString = ''
  for(let i = 0; i < str.length; i++){
    const letter = str[i]
    if(isAlphaNumeric(letter)){
      nonAlphaString += letter
    }
    }
    return nonAlphaString
  }

function isAlphaNumeric(char){
  let code = char.charCodeAt(0)
  return (
    code >=48 && code <= 57 || code >= 97 && code <= 122
  )
}

function comparativeString(str){
  let compString = ''
  for(let i = str.length - 1; i >= 0; i--){
    compString += str[i]
    console.log('Comparative String is: ' + compString)
  }
  return compString
}





module.exports = isPalindrome;
