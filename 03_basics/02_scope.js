let a = 300 
if(true){
    let a = 10 
    const b = 20 
    //var c = 30 
   // console.log("INNER:",a);    
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Ishika"

    function two(){
        const website = "youtube"
      //  console.log(username);
    }
   // console.log(website);

    two()
}

//one()

if(true){
    const username = "Ishika"
    if (username === "Ishika"){
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// +++++++++++++++ Interesting ++++++++++++++

console.log(addone (5))

function addone (num){
    return num + 1
}
//console.log(addone (5))

//addTwo(5).........this is giving you error 
const addTwo = function(num){
    return num + 2
}

addTwo(5)