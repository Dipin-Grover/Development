
// hoisting in js 


// hoising me hum log var declaration ko sabse upar kar dete h ye js ke execeution ke ime ka concept h bhai 

// if code is like this 


// let x =20;
// let y = 15;
// console.log(x);
// var z = 12;

// console.log(z);
// console.log(y)




// then after hoising it will become like this 


// let x; // here x and y are let and const so no values will be initialized variable declartion is on top not assignemtn of values 
// let y;
// var z = undefined; // initially when var z is declared it will get value undefined 
// console.log(x);

// x =20;
// y= 15;
// z= 12;

// console.log(z);
// console.log(y)






// hoisting is just a concept that js may work like this for understanding of developers 






// execution context happens in two phases 

// all this process happens in stack called global execution context

// 1. memory allocation phase 
// where variables declared using let are not given any values 

// while varibales declared using var are assigned values of undefined 


// if there is a function named let say sum 
// then in memory allocation phase sum : and whole code of function is pasted 



// 2. code execution 
// where code is eecuted line by line and variables declared using let and const are assigned them values 

// if there is function then function will open a seperate execution context of a unction of function itself 


