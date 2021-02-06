let romanToInt = s => { //changed var to let,used the arrow function syntax
    //the process - even if the exceptions are identified its hard to put all the data in one array in order
        let reducer = (currentVal, accumulator) => {return currentVal + accumulator }
        let arr = s.split('')
       let mapped = arr.map(x=>{
           switch(x){
               case "I":
                  return x= 1
                   break;
                       case "V":
                   return x= 5
                   break;
                         case "X":
                   return x= 10
                   break;
                         case "L":
                   return x= 50
                   break;
                         case "C":
                   return x= 100
                   break;
                         case "D":
                   return x= 500
                   break;
                         case "M":
                   return x= 1000
                   break;
           }
        
       })
          console.log(mapped)//go over letters and assign letters to numbers,these are the //numbers
        //this loop is to iterate over new array mapped, then replace certain elements, check after
        for(i=0;i<mapped.length;i){
            if(mapped[i] < mapped[i+1]){
                mapped[i]= mapped[i+1]-mapped[i]
                mapped[i+1]= 0
                i=i+2
            } //33-38 is taking the newly converted letters, comparing the value of one element to the next, if 
//the value is lower then set the smaller element to the next element minus the current, then iterate 2 elements ahead
//instead of the next, but if the element is more then just iterate to the next
//then reduce this final array to get the value of the roman numeral input
            else{
                i++
            }
        }
        console.log(mapped)
        console.log(mapped.reduce(reducer))
        document.getElementById("reveal").innerhtml = mapped.reduce(reducer)
        
    };