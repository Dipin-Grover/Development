
//shallow copy vs deep copy 


let obj_1 = {
    a: 1,
    b: 2
}

let obj_2 = obj_1;
obj_2.a = 10;
//  i only changed in object 2 but changes are alo implemented in object 1 also 
console.log(obj_2,obj_1);


// this is deep copy 
let obj_3 = structuredClone(obj_1);
obj_3.a = 20;
console.log(obj_3,obj_1);





// nested objects 

let user ={
    firstname : "Dipin",
    lastname : "Grover",
    address : 
    {
        pincode : 122001,
        city : "Gurugram",
        state : "Haryana",
    }
}


console.log(user.address.pincode);






// now lets see if assign do shallow copy or deep copy 

let user2 = Object.assign({},user);

user2.address.city = "Ambala" ; 

// here copy by refernce it means both copy have same refernce
// same copy for nested keys here 
console.log(user.address.city);
console.log(user2.address.city);


// two seperate copy for non nested keys 
user2.firstname = "Mahesh Dalle";
console.log(user.firstname);
console.log(user2.firstname);






// destructuring objects 

const information ={
    name : "Divya Tiwari",
    age : 22,
    gender : "Female",
    degree : "B.Tech",
    aadhar : 9293938000
}


// without changing keys name


// const {name,age,degree} = information;
// console.log(name,age,degree);


// with changing key names
const {name : full_name , age:current_age , degree:kha_tak_padhe_ho} = information;

console.log(full_name,current_age,kha_tak_padhe_ho);






// using  rest operator here 
const {name,age,gender,...obj_4} = information;
//except from name age and gender all keys will be stored in obj_4

console.log(name,age,gender);

console.log(obj_4);








// destructuring array 

const arr = [1,2,3,5,6,9,11];

// method -1 
const [first,second]  = arr;

console.log(first,second);

// method -2 
const [third,fourth , , fifth] = arr;


console.log(third,fourth,fifth);


// method -3 
const [sixth , seventh , ...arr_1] = arr;


console.log(sixth,seventh);
console.log(arr_1);





// how to destructure a nested object 

let Obj = {
    name: "Divya Tiwari",
    age : 22,
    degree : "B.Tech",
    branch : "Cse Core",
    array : [20,40,60,10,90],
    address: {
        pincode : 122001,
        city : "Gurugram",
        state : "Haryana"
    }
}



// now lets see how to used destructuring in nested object 

let {name : first_name , age : years} = Obj;

console.log(first_name,years);


// now for nested objects 
let {address : add} = Obj;

// yha address as add store hua jo ek object h 







const {address : {pincode} } = Obj;
console.log(pincode);



// acess array within object 
const {array : [temp]}  =  Obj;
console.log(temp);






// using functions inside object 

let details = {
    name: "Divya Tiwari",
    age : 22,
    balance : 100,
    greet : function()
    {
        console.log("Hello Divya");
        // it will return undefined 
    },
    meet : function()
    {
        return "Namaste";
    }
}

details.greet();


console.log(details.meet());












