function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
return birds.filter(x=> !geese.includes(x))
  
  // return an array containing all of the strings 
  //in the input array except those that match strings in geese
};

this function takes in an array of birds, has an array of geese that is compared to the array of birds.
i just learned that by using both filter() and includes() you can iterate over the birds array, and return the array
minus the geese. I find this to be a really powerful combination of methods and want to log it in this repo.