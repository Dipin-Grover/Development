// primitive data types 
const num_1 = 10;
// cannot chnage now 
console.log(num_1);

//mon primitive data type 
let obj_1 = {
    name: "Dipin",
    id: 1
}

// obj_1 store karta h memory address of object


console.log(obj_1);

obj_1.name = "Vishnu";

console.log(obj_1);

const obj_2 = {
    name: "hardik",
    id:2
}


obj_1 = obj_2; // here we are trying to assign memory address of obj2 to a const of obj_1 so it will give us error
//lein agar if we declared obj_1 as using let it allows us to use obj_1 = obj_2


// console.log(obj_1);


