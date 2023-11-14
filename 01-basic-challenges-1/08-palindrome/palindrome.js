// loop through string twice (once from the beginning and once from the end)


function isPalindrome(str) {
  let first = forwardLoop(str.toLowerCase())
  let second = reverseString(first)
  return first === second
}

function forwardLoop(str){
  let forwardString = ''
  for (let i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57 || str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122){
      console.log( forwardString += str[i] )
    }
  }
  return forwardString
}

function reverseString(str){
  let reverseString = ''
  for (let i = str.length - 1; i >= 0; i--){
    reverseString += str[i]
  }
  return reverseString
}

module.exports = isPalindrome;
