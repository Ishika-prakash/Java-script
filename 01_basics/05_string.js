const name = "Ishika"
const repoCount = 50

// console.log(name + repoCount + " Done");

console.log (`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Ishika-prs')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice( 4 , -3)
console.log(anotherString);

const newstringOne = "       Ishika     "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://ishika.com/ishika%30prakash"

console.log( url.replace('%30' , '_'))

console.log(url.includes('sundar'));

console.log(gameName.split('-'));