// global object
// humare pass hota h ek global object 

// jisme avaialable hota h sab chize like 

// functionality of 
// console.log("hello");
//  Math.random();
// setInterval();
// new Object();


// like these 

// in chrome we can acces them using window 
// in node we can access it using global


// in node we can acces it like this 
console.log(global);



// globalthis is used to avoid confusion as on chrome we are using window and on node we are using global.
// so to avoid confusion we are using universal thing so we use globalThis
console.log(globalThis.Math.random());
