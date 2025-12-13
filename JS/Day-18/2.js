// this keyword usage 

// two diffeent usage in browsers and in nodejs 

// we are studing in browsers right now 

// Case1 Outside any function (global context)



console.log(this);
// in browsers it will behave as window or global this 









// case 2 when this keyword is declared inside function

// two cases strict mode and non strict mode 


//in non strict mode when it is declared inside function 

function greet()
{
    console.log(this);


    // here it refers to global object or (globalThis)
}

greet();




// in strict mode 


// this will give us undefined inside function 



"use strict"
// agar me iss line ko top of document pe paste akrdu toh i will get undefined i have tried 
function cheat()
{
    console.log(this);
}


cheat();


// in non strict mode when when this is used inside function it will point to global object(globalThis)

// agar me funcion ke andar this use karunga inside strict mode toh wo mujhe undefined dega 

// but if i use window.cheat() like this this will point to global object 


window.cheat()











// case3 when is used inside object like eg below 

let obj = {
    name: "Dipin",
    age : 22,
    namaste : function(){
        console.log(this);
    }
    
}


obj.namaste()

// yha this point karega object obj ko 











// case 4 for arrow function


// arrow function ka khudka this nhi hota h 
// wo surrounding scope(parent scope) me this inherit karta h 


let obj_1 = {
    name: "Dipin",
    age : 22,
    fun: () =>{
        console.log(this);
    }
}

obj_1.fun();


// yha ek arrow function h so yha this ka koi role nhi toh wo parent yaani global scope me thsi ka dekhta h jo hota h gloal obejct 



// eg2 

// what if arrow function is declared inside a function 

let obj_2 = {
    name: "Dipin",
    age : 22,
    fun: function(){

        // yha arrow function is declared inside a function 
        let ab = () =>{
            console.log(this);
            // yha toh this ka koi h nhi yeh arrow me defined h 
            // so apne parent function ka inherit karega yeh 
            // function ka this point karta h object ko 
        }

        ab();
    }
}

obj_2.fun();











// case 5 inside constructor or class 




class Person{
    constructor(name,age)
    {
        this.name = name,
        this.age = age
    }
}



// iss case me ab this a ko point karega jo h object Person ka instance

let a = new Person("Mohan",12);
console.log(a);






// // jab hum var se ek variable bnate h toh wo global object ka part ban jaata h 
// // agar hum local scope  me var bnate h toh woh khi se bhi access ho sakta h 
// {
//     console.log(b)
// }

// var b;







// function gun()
// {
//     var b;


//     // par jab aise var function ke andar hota h toh isko hum bhar se acces nhi kar skate ye bas function ke andar se hi aceess ho sakta h
// }