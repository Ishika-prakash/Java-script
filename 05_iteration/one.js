// for 

for (let i = 0 ; i <= 10 ; i++ ){
    const element = i ;
    if(element == 4){
     // console.log("4 is best number")
    }
   // console.log(element)
}

for (let i = 1 ; i <= 10 ; i++){
   // console.log(`Outer loop value ${i}`);
    for (let j =0 ; j<= 10 ; j++ ) {
     //   console.log(`Inner loop value ${j} and inner loop value {i}`);
      //  console.log(i + '*' + j + '=' + i*j)
    }
}

let myArray = ["flash" , "batman" , "superman"]
console.log(myArray.length)
for (let index = 0 ; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element);
}

// break and conntinue

for(let index = 1 ; index <= 20 ; index++) {
   // const element = array[index];
   if (index == 4){
  //  console.log("Detected 4");
    break
   }
 //  console.log(`Value of i is ${index}`)
}

for(let index = 1 ; index <= 20 ; index++) {
    // const element = array[index];
    if (index == 4){
     console.log("Detected 4");
     continue 
    }
    console.log(`Value of i is ${index}`)
 }