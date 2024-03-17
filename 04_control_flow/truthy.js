const userEmail = "i@ishika.is"

if(userEmail){
    console.log("got user Emial")
}
else{
    console.log("Don't have user email")
}

//if (userEmail.length === 0 ){
//    console.log("Array is Empty");
//}

const emptyObj = {}

if (Object.keys(emptyObj).length=== 0 ){
    console.log("Object are Empty")
}

// Nullish Coalescing Operator (???): null  undefined

let val1 ;
//val1 = 5 ?? 10 
//val1 = null ?? 10
//val1 = undefined ?? 15 
val1 = null ?? 10 ?? 15
 console.log(val1)

 // Terniary operator

 //condition ? true : false

 const iceTeaPrice = 100

 iceTeaPrice>= 80 ? console.log("less than 80") : console.log("greater than 80")