// prototype chaining 

let user_1 = {
    name : "Divya Tiwari",
    age : 22
}

let user_2 ={
    balance : 100,
    acc_no :  287489
}

user_2.__proto__ = user_1;
// user 2 ab user 1 ki properties ko bhi acess kar sakta  h ab 

console.log(user_2.name);


let arr = [10,20,30,40,50];

console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__ == Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ == null);
