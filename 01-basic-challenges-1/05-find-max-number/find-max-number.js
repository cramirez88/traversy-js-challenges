function findMaxNumber(arr) {
//  I want to loop through an array and find the largesr number.
// A variable that keeps track of current largest number
let highestNumber = arr[0]
for(let i = 0; i < arr.length; i++){
  if(arr[i] > highestNumber){
    highestNumber = arr[i]
  }
}
return highestNumber
}

module.exports = findMaxNumber;
