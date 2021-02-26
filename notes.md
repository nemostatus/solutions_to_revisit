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

The function above takes a number and returns a string of alternating "01". The most useful bit of code from this snippet is if( count/2 % 1 === 0) which is checking to see if the count divided by 2 is a float or a whole integer. Checking the type wont work, it s labeled the same, a number. So by checking the remainder the programmer can determine if the number is a float or a whole number. This is another useful bit of knowledge to know for future reference.I'm going to see best practices for the solution above. The following code isnt considered top best practice but the code is alot shorter and i want to know how

const stringy = x => ''.padStart(x,'10');

ok so from left to right, a function using arrow function syntax takes in an integer then returns alternating 0s and 1s starting with 1 the length of the integer.Testing the shorter code actually works. but how?
whats padstart, mozilla says The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. there example

const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"
so 5.padstart(2,'0')
the 5 is padded by the 0 until total length is 2 so '05'

so
lets say input is 5 
'' or empty space is  padded with 01 so what if the length is just 1
it just returns half the string or 1 in this case

I guess the lesson to take away here is that there may be a method out there that makes everything easier
also look into creating my own library of code where i can build my own methods(project idea)


function fakeBin(x){
let arr = x.split('')
return arr.map(x=>{
return parseInt(x) < 5 ? '0': '1'
}).join('')
}

The function above is my solution for taking in a string of numbers like '45385593107843568' and returning the binary value of it. any digit with a val under 5 is 0 and above it a 1. This is a function that is difficult to see how it can be refactored. There isn't an unecessary if else statement and instead a ternary statement is used. returning a new array(later joined) based on the integer value w parse int, and if lower than 5 return 0 and above a 1 so i think im proud of how this solution turned out. Let's check out the best practice for this .It's alot less code, I'll see why.
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
ok so it seems I tend to declare and assign variables unecessarily. I dont understand however why theres no parse
int to turn the elment into an integer,implicit syntax is also used
differences
------------
1.vars declared when shouldnt be
2.implicit syntax shoould be used
3.unecessary parseint is used,, in js a string number can be compared to an integer

im going to test strings and integers with comparison operators in dev tools to see the result.it works



The following solution is for a problem that wants the dev to  subtract one set of numbers from another set of numbers depending on which set of numbers has a greater value, this is problem is one that I had a clear cut solution in my head from the beginning. In pseudo code I knew
.I would need a reducer function to multiply all the values of an array together 
.use this reducer on both arrays
.Have a condtional(I thought a ternary statement would be appropriate here) that compares values and subtracts the lesser num from the greater num

here's the solution I came up with, this time I'm going to review the best practices section and figure out that they did differently heres my solution

function findDifference(a, b) {
  let reducer = (acc,cv) => {
    return acc * cv
  }
  let reduceA = a.reduce(reducer)
    let reduceB = b.reduce(reducer)
    return reduceA > reduceB ? reduceA-reduceB: reduceB-reduceA
}

this was considered an easy problem in codewarss, I also want to stop solving level 8 katas and focus on level 6 katas so I can grow and think more about these problems. The code below is considered best practice

function find_difference(a, b) {
  return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}
ok so right away i dont get Math.abs.
the mozilla definition is The Math.abs() function returns the absolute value of a number,
whats that mean
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
based off these examples I see that it takes whatever value there is an makes it positive. and also isnt an arr anymore
so lets check 8-5 = 3 ok lets try reversed  5-8 = -3 the pattern is no matter which way it's subtracted its the polar opposite and Math.abs makes it postive so this removes the need to check the higher value also a reducer var isnt defined but instead used directly in the same line. Maybe I should stop declaring so many variables unless necessary. Maybe by doing so it makes everything quicker.