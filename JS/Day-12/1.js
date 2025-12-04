// undestanding functions 

// example of function
function greet()
{
    console.log("Namaste ji kaise ho aap ?");
    console.log("Hello Coders");
}

greet();



function sum(number1 , number2)
{
    console.log(number1 + number2);
}


sum(10,20);



// return statement

function multiply(number1 , number2)
{
    // console.log(number1 * number2);

    return number1 * number2
}


let val = multiply(7,8);
console.log(val);




// using function in variable

const fun = function ()
{
    console.log("Namaste");
    console.log("Kaise ho tum?");
    return "VITBKL";
}


// we will call this using variable name and () at end 
// function call
fun();

// return statement ko print karega yeh 
console.log(fun());




// arrow function (IMP)
// same as function declared inside variable but here we do not write function word and we use => symbol 

let print = () =>{
    console.log("Namaste");
}

print();


let sum_1 = (num_1 , num_2) =>{
    return num_1 + num_2;
}

console.log(sum_1(3,4));






// much smaller syntax of arrow function 
// no need to write return also 

let sum_2 = (num_1,num_2) => num_1 + num_2;


console.log(sum_2(3,7));






// let take example to understand arrow function

// using normal function 
let cube = function(num)
{
    return num*num*num;
}

console.log(cube(5));


// using arrow unction shorter code 

let cube_1 = (num) => {
    return num*num*num;
}


console.log(cube_1(6));



// using arrow function more shorter 

// if there is one parameter we dont need to write braces also 

// like here we dont need to write like this 

//            (num) =>

let cube_2  = num => num*num*num;

console.log(cube_2(8));




//let's say hume ek function de rakha h aur aur hume pta hi nhi h ki hume kitne parameters pass karne h usme 


// mujhe pta hi nhi h andar kitne input aane wale h 

// i can use rest operator here 

let printing_sum = function(...num){
    console.log(num);
}


printing_sum(2,3)
printing_sum(7,98,19);
printing_sum(1,2,3,4,5)


//  ⚠️ need to see  differnce between rest and copy operator both are (...)




// we can aslo use object with functions 

let obj = {
    name : "Divya Tiwari",
    gender: "Female",
    age : 22
}


let temp = function (obj1)
{
    console.log(obj1.name , obj1.gender , obj1.age);
}

temp(obj);




// we can also use destructuring here 
// if object contains 1000 key value pairs andd i want to pass only few out of them 


// we can aslo write it as 

let gun = function(obj1)
{
    const {name , gender} = obj1;

    console.log(name,gender);
}

// above this comment and  below this comment is working same  just syntax is bitt different 

let print_data = function({name,age})
{
    console.log(name,age);
}

gun(obj);
print_data(obj);


// how to change the prototype 

let obj1 = {
    a:1,
    b:2
}

let obj2 = {
    c:1,
    d:2
}



obj1.__proto__ = obj2;


console.log(obj1.__proto__);
//now the prototype of obj1 is changed to obj2

// ⚠️ but this method should be avoided as this is costly 




// instead we should do this 

obj2 = Object.create(obj1);














