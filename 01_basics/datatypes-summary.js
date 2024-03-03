// Primitive 

// 7 types : String  , number , boolean , null , undefined , symbol , BigInt

const score = 100 
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id === anotherId );

const bigNumber = 345678987653n


// reference (non primitive) types

// Array , Objects , Functions 

const heros = ["shaktiman" , "naggraj" , "doga" ]
let myObj = {
    name: "Ishika" , 
    age : 18 ,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);



// ******************************************

// stack(primitive) , heap(non primitve)

let myYoutubename = "Ishikaprakashdotcom"

let anothername = myYoutubename
anothername = "chaiaurjs"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com" ,
    upi : "user@ybl" 
}

let userTwo = userOne

userTwo.email = "Ishika@google.com"

console.log(userOne.email);
console.log(userTwo.email);