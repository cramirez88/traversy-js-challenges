function titleCase(str) {
//  returns the string with the first letter of the word capitalized
// what data structure allows me to do this more easily?-> Arrays
// convert string to array
let stringArray = str.split(' ')
// loop through array and with the first character of each item capitalize the letter
for (let i = 0; i < stringArray.length; i++){
  // console.log(stringArray[i][0].toUpperCase())
  // returns the first letter capitalized --> I need to tack on the rest of the string
  console.log(stringArray[i][0].toUpperCase() + stringArray[i].slice(1))
  stringArray[i]= stringArray[i][0].toUpperCase() + stringArray[i].slice(1)
}
return stringArray.join(' ')
}

module.exports = titleCase;
