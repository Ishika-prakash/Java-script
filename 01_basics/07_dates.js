// dates

let myDate = new Date()
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024 , 8 , 30 )
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date (2024 , 8 , 30 , 5 )
//let myCreatedDate = new Date ("2204-09-30")
let myCreatedDate= new Date ("09-30-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now ()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDate());
//console.log(newDate.getMonth());
//`${newDate.getDate()} and the time `

newDate.toLocaleString('default',{
    weekday:  "long",
    
})
console.log(newDate);