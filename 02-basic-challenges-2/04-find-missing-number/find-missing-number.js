function findMissingNumber(numArr) {
  if(numArr.length === 0) {
    return 1
  }
  if(!numArr){
    return undefined
  }

  let lengthOfArray = numArr.length + 1

  let realSum = lengthOfArray * (lengthOfArray + 1)/2
  let actualSum = 0
  for(let i = 0; i < numArr.length; i++){
    actualSum += numArr[i]
  }

  return realSum - actualSum
}

module.exports = findMissingNumber;
