// use of for in loop 

let obj = {
    firstname : "Divya",
    lastname : "Tiwari",
    age: 22,
    gender : "Female"
}

// use of for in loop 
for(let key in obj)
{
    console.log(`${key} : ${obj[key]}`);
}

// we can aslo access keys like this
console.log(Object.keys(obj));
// for accessing values we can use 
console.log(Object.values(obj));










// so what's differnce in using Object.keys(obj_name) and accessing keys using for in loop 


let obj_2 = Object.create(obj);
// obj_2 can access values of obj


obj_2.city = "Gurugram";
obj_2.balance = 100;


console.log(Object.keys(obj_2));
// i got acces to only newly added properties like city and balance 


// but if i use for in loop 
for(let key in obj_2)
{
    console.log(key);
}

// here i am able to acess all keys city,balance,firstname,lastname,age,gender