function displayLikes(nameArray) {
  // based on the array given, the function should return the names in the array as the people who liked the post
  
  for(let i = 0; i <= nameArray.length; i++){
    if(nameArray.length === 0){
      return 'no one likes this'
    }else if(nameArray.length === 1){
      return `${nameArray[0]} likes this`
    }else if(nameArray.length === 2){
      return `${nameArray[0]} and ${nameArray[1]} like this`
    }else if(nameArray.length === 3){
      return `${nameArray[0]}, ${nameArray[1]} and ${nameArray[2]} like this`
    }else {
      return `${nameArray[0]}, ${nameArray[1]} and ${nameArray.length - 2} others like this`
    }
  }
}

module.exports = displayLikes;
