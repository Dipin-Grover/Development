// scoping in js 
// three types of scoping 
// global scope  , functional(local) scope  , bloack scope 




// let a = 10;
// var b = 20;
// const c = 30;


// console.log(a);
// console.log(b);
// console.log(c);

// // global scope as they can be accessed globally 




// function num()
// {
//     let a = 10;
//     var b = 20;
//     const c = 30;

//     console.log(a,b,c);
//     console.log("Namaste");

//     // function scoped variables 

// }


// num();


// console.log(a);
// console.log(b);
// console.log(c);

// // i cannot acces a,b,c from outside the function 










if(true)
{
    let a=  10;
    var b = 20;
    const c = 30;
}

console.log(b);

// i am able to access b from outside bloack scope using var 


// var b = 30;
// var b = 45;
// var b = 12;



// here we can declare with same variable name like b has been declared thrice using var keyword but using let and const we cant do that 
// this is problem 
console.log(b);






// like here 
for(var i = 0 ; i<5 ; i++)
{
    console.log(i);
}

// cannot access with using let keyword 
// console.log(i);


console.log(i);
// here if i use var keyword in loop i can print i even if its outside 
console.log("Good morning");









let amount= 10;

if(true)
{
    let amount = 23;
    // this is possible as one amount is in global scope and other amount is in local scope

    console.log(amount);
    // here 23 will be assigned 
}

console.log(amount);




// one more problem we were able to acces values before declartion using var 

console.log(a);
// it will return undefined but after declartion if we do console log it gives us original values 
var a = 10;

console.log(a);








// one more thing 

greet();

// i can call greet even before calling function  meet
function greet()
{
    console.log("Hello greet");
}




// i cannot call meet without declaring  fnction first as here meet is varibale inside which function is declared 


const meet = function()
{
    console.log("Hello Meet");
}

meet();




// while loop in js 

let k = 1;

while(k < 6)
{
    console.log(k);
    k++;
}



//  do while loop
let m = 1;
do{
    console.log(m);
    m++;
}
while(m <4)



// printing array elements 

let arr = [10,20,30,40,50];


for(let i = 0 ; i<arr.length ; i++)
{
    console.log(arr[i]);
}






let obj1 = {
    name : "Divya",
    age : 22,
    gender : "Female",
    degree : "B.Tech"
}

let key = Object.keys(obj1);

console.log(key);




// if now i want to access values corresponding to keys 

for(let i = 0 ; i<key.length ; i++)
{
    console.log(obj1[key[i]]);
}



// need to see  for in loop 



let obj = {
    firstname : "Divya",
    lastname : "Tiwari",
    degree : "B.Tech",
    age : 22
}


for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}




















