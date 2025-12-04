// creation of object 

let obj_1 = {
    0: 12,
    1: 34,
    2: 19,
    3: 28,
    name : "Dipin Grover",
    age : 22,
    gender : "Male",
    account_balance : 100,
    degree  : "B.Tech",
    "account number" : 471893 , 
    undefined : 123467,
    null : "ramesh"
}

console.log(obj_1);
console.log(typeof obj_1);


// agar hum upar wale ko array me store karte toh 
let arr = ["Dipin",22,"Male",100 , "B.tech"];
// but isme ek problem h hume kaise pta chalega ki 22 kya h aur 100 kya h wo kis chiz ko represetn kar rhe h 


// we can access object values in this way 
console.log(obj_1.account_balance);
console.log(obj_1.name);
console.log(obj_1.degree);


// keys as string consider hongi yha 


// we can also access values in this way using [] but we need to give key name in "name" like this 
console.log(obj_1["name"]);
console.log(obj_1["age"]);


// there can't be spaces inside key name so we used this method using string as key 
console.log(obj_1["account number"]);






// what if keys are numbers 

// we can acees them as strings inside []  or without strings indide []
console.log(obj_1['0']);
console.log(obj_1[1]);



console.log(obj_1.undefined);
console.log(obj_1["null"]);





// another way to create object 

let person =new Object();

console.log(person);
// this will be an empty object 

// add new properties 
person.name = "Dipin Grover";
person.age = 22;
person.gender = "Male";
person.degree = "B.tech";

console.log(person);




// update existing propeties 
person.name = "VIT MC";
console.log(person);

// delete existing properties 
// it will delete key value pair from object 
delete person.gender;
console.log(person);



// another method to create objects using class 
class People{
    constructor(name , age , gender)
    {
        this.name = name ; 
        this.age = age ; 
        this.gender = gender ;
    }
}

let person_1 = new People("Mahesh",23 , "Male");
let person_2 = new People("Samaksh",34,"Male");
let person_3 = new People("Divya",21,"Female");

console.log(person_1);
console.log(person_2);
console.log(person_3);


let Obj_1 = {
    name: "Divya",
    gender: "Female",
    degree : "B.Tech.",
    age : 22,
}

console.log(Obj_1);

// keys of object
let keys = Object.keys(Obj_1);
console.log(keys);

// value of object
let values = Object.values(Obj_1);
console.log(values);

// entires of object key : values pairs in array form 
let entires = Object.entries(Obj_1);
console.log(entires);




// assign in objects 
// if i want to combine objects 
let obj_2 = {a:1 , b:2 };
let obj_3 = {c:3 , d: 4};
let obj_4 = {e:5 , f:6};

let obj_5 = Object.assign({},obj_2,obj_3,obj_4) ; //  it means combine all objects in empty array 
console.log(obj_5);

let obj_6 = Object.assign(obj_2,obj_2,obj_3,obj_4) ;
// this will add all objects in obj2 and obj2 will be combination of all objects 
console.log(obj_2);



// spread method
let obj_7 = {...obj_2 , ...obj_3 , ...obj_4};
// iska matlab h 
// {{a:1 , b:2 } , {c:3 , d: 4} ,{e:5 , f:6} }
// phir ye isko spread kar dega like this 
// {a:1 , b:2 , c: 3 , d: 4 , e: 5 , f:6};
console.log(obj_7);



// freeze method 
// cannot add new properties 
// cannot delete properties 
// cannot update properties
"use strict"
const per_1 = {
    firstname : "Dipin",
    lastname: "Gover",
    age : 22,
    degree : "B.Tech"
}

Object.freeze(per_1);

per_1.firstname = "Ramesh";
console.log(per_1);




// seal method 


// cannot add new properties 
// cannot delete properties 
// but we can  update properties
let per_2 = {
    firstname :  "Dipin",
    lastname : "Grover",
    age : 22,
    gender : "Male"
}

console.log(per_2);

Object.seal(per_2);

per_2.firstname = "Divya" ;
per_2.gender = "Female";

per_2.hobby = "Swimming" // will give error due to addition of addition key hobby

console.log(per_2);




