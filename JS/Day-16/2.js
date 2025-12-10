// let first see functionality of has own property method 


let user = {
    name : "Dipin",
    age: 22,
    gender: "Male",
    
}

// it is used to see if in object we have that key or not and it will return a boolean

console.log(user.hasOwnProperty("age"));
console.log(user.hasOwnProperty("degree"));



if(user.hasOwnProperty("orange"))
{
    // agar iss object me Orange key h toh uske count ko increase kardo 

    user["orange"]++;
}
else{
    // create a new key with name orange

    user["orange"] = 1;
}

console.log(user);




