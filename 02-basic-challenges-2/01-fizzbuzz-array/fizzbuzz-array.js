function fizzBuzzArray(num) {
  // divisible by 3 print fizz
  // divisible by 5 print buzz 
  // divisible ny 3 and 5 FizzBuzz
  // return an array with all numbers up to the number passed and replace the divisible number with appropriate phrase
  let newArr = []
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      newArr.push('FizzBuzz')
    }else if(i % 3 === 0){
      newArr.push('Fizz')
    }else if(i % 5 === 0){
      newArr.push('Buzz')
    }else{
      newArr.push(i)
    }
  }
  return newArr
}

module.exports = fizzBuzzArray;
