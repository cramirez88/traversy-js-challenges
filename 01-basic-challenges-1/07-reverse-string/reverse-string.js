function reverseString(str) {
  // takes in a string and return the reverse of that string
let reverse = ''

for(let i = str.length - 1; i >= 0; i--){
  reverse += str[i]
}
return reverse
}

module.exports = reverseString;
