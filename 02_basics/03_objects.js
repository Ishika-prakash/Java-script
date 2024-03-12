// singleton

// object literals


const mySym = Symbol("key1")

const JsUser = {
    name : "Ishika" ,
    "full name" : "Ishika prakash" ,
    [mySym]: "mykey1" ,
    age : 18 ,
    location : "Sasaram" ,
    email: "ishika@google.com" ,
    isLoggedIn: false , 
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);

JsUser.email = "ishika@chatgpt.com"
//Object.freeze(Jsuser)
JsUser.email = "ishika@microsoft.com"
//console.log(Jsuser);



JsUser.greeting = function() {
    console.log("Hello Js user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js user , ${this.name}` );
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());