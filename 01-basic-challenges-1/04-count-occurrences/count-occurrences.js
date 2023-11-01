function countOccurrences(str, char) {
  let totalOccurences = 0
  for(let i = 0; i < str.length; i++){
    
    if(str[i] === char){
      totalOccurences++
    }
  }
  return totalOccurences
}


module.exports = countOccurrences;
