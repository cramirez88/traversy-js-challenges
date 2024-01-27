function countOccurrences(str, char) {
  // you're given a string and you want to loop through it, and as you go, keep track of occurences of such character.
  let charOccurrences = 0
  for(let i = 0; i < str.length; i++){
    if(char === str[i]){
      charOccurrences++
    }
  }
  return charOccurrences
}


module.exports = countOccurrences;
