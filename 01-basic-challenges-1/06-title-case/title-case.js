function titleCase(str) {
  // split method will put the string into array at every space
  let splittingStr = str.toLowerCase().split(' ')
  for(let i = 0; i < splittingStr.length; i++){
    // loop through array first letter
    console.log(splittingStr[i][0].toUpperCase())
    splittingStr[i] = splittingStr[i][0].toUpperCase() + splittingStr[i].slice(1)
    splittingStr
  }
  return splittingStr.join(' ')
}

module.exports = titleCase;
