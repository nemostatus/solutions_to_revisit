function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
return birds.filter(x=> !geese.includes(x))
  
  // return an array containing all of the strings 
  //in the input array except those that match strings in geese
};

this function takes in an array of birds, has an array of geese that is compared to the array of birds.
i just learned that by using both filter() and includes() you can iterate over the birds array, and return the array
minus the geese. I find this to be a really powerful combination of methods and want to log it in this repo.

function stringy(size) {
let count = 0
let string =[]
for(i=0;i<size;i++){
count++
console.log( count/2 % 1 === 0)
 if( count/2 % 1 === 0){
string.push("0")
 }
  else{
string.push("1")
  }
}
  console.log(string.join(''))
  return string.join('')
}

The function above takes a number and returns a string of alternating "01". The most useful bit of code from this snippet is if( count/2 % 1 === 0) which is checking to see if the count divided by 2 is a float or a whole integer. Checking the type wont work, it s labeled the same, a number. So by checking the remainder the programmer can determine if the number is a float or a whole number. This is another useful bit of knowledge to know for future reference.