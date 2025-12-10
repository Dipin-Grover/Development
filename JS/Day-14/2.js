let obj = {};

console.log(obj);


// in obj we have key value pairs aslo we have additional properties like writable enumerbale and configurable


obj.name = "Dipin";

console.log(obj);


console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// by default writable enumerable and configurable all are set to true by default 



// now lets see writable se kya hota h 
// writable ki help se hi hum key ki value ko modify kar sakte h 

// like phle name:"Dipin" tha 

obj.name = "Samay";

// ab name:"Samay" ho gya h 


// by default sab writable , enumerable , configurable sab true hote h 





let obj_1 = {};


Object.defineProperty(obj_1 , "name" , {
    value: "Dipin",
    writable: false,
    enumerable : true,
    configurable : true
});




// ab maine writeable ko false kar dia h 
// ab mein edit nhi kar sakta name ko 


obj_1.name = "Ganesh";
// name will not be changed as obj_1 writable is off
console.log(obj_1);


// configurable act as a lock if i set configurable to false it means i cannot change writable and enumerable 







let obj_2 = {
    name : "Dipin",
    age : 22,
    gender : "Male",
    account_number : 122001
}


console.log(obj_2);

// if i want ki yeh value change na ho account_number ki then i can do this 

Object.defineProperty(obj_2 , "account_number" , {
    writable: false
})


obj_2.account_number = 81038;

console.log(obj_2);





let customer = {
    name : "Dipin",
    age : 22,
    account_number : 100902,
    account_balance : 150,
}


console.log(customer);


// i want ki customer ka account number aur account abalance kabhi change na ho

Object.defineProperty(customer , "account_number" , {
    writable : false
})

customer.account_number =821498;

console.log(customer);




// lets see the functionality of enumerable 


let customer_1 = {
    name: "Dipin",
    age : 22,
    account_number : 29148129,
    account_balance : 29
}

Object.defineProperty(customer_1 , "name" , {
    enumerable: false
})


for(let key in customer_1)
{
    console.log(key);
    // cannot access age as it's enumerbale is false



}


// lets create one more object 

let customer_2 = Object.create(customer_1);
// created new object customer_2 having access of customer_1

customer_2.city = "Gurugram";
customer_2.gender = "Male";




for(let key in  customer_2)
{
    console.log(key);
    // we are able to access key for which enumerabale is true
}





