function sayMyName (){
    console.log("I");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("k");
    console.log("a");
}

//sayMyName()

//function addTwoNumber (number1 , number2){
//    console.log(number1 + number2 );
//}

function addTwoNumber (number1 , number2){
 // let result = number1 + number2 
 // console.log("Ishika");
 // return result
 return number1 + number2
}

const result = addTwoNumber(14 , 17)

//console.log("Result:" , result);

function loginUserMessage(username = "Ishu") {
    if (!username){
    
   // if (username === undefined){
        console.log("Please Enter a Username") 
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Ishika"));

function calculateCartPrice (val1 , val2 , ...num1){
    return num1
}

//console.log(calculateCartPrice(200 , 300 , 600 , 800 , 367 , 400));

const user = {
    username : "Ishika " , 
    price : 899
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username: "Ishu" , 
    price : 399
})

const myNewArray = [ 200 , 600 , 500 , 400]
function returnSecondValue (getarray){
    return getarray[3]
}

console.log(returnSecondValue(myNewArray));