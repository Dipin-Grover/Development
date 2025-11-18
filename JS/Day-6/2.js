// strings in js

let str_1 = "hello ji";
let str_2 = 'Namaste ji kaise ho aap';
let str_3 = `ki haal chaal`; // backtick symbol

console.log(str_1);

console.log(str_2);

console.log(str_3);


let price = 40;
console.log(`Price of onion is ${price} `);



// string concatenation
let st_1 = "namaste";
let st_2 = " DSA";
console.log(st_1+st_2);


//finding string length
let st_3 = "namaste";
console.log(st_3.length);


// mujhe print karna h "hello coder army" exact aise 

console.log('"Hello coder army"');

// mujhe print karna h 'hello coder army'
console.log("'Hello Coder army'");


//move to new line 
let mess = "Dipin kuch karna h bhai mujhe life mai.\nAur efforts daalne honge i know i can do this.";
console.log(mess);



//what if i have to print \n
let comment = 'Chaand sifaarish jo karta tumhari .\\nDeta wo tumko bta ';
console.log(comment);


// acess a particular char in a string 

let message = "Dipin Grover";
console.log(message[10]);
console.log(message.charAt(0));



// to lowercase and Uppercase
let string_1 = "Dipin";
console.log(string_1.toLowerCase());
console.log(string_1.toUpperCase());

// original string waisi hi rhegi 




let statement = "Virat Kohli and Ravi Shastri is the best captain and coach duo India have Virat and Shastri ji";
console.log(statement);
console.log(statement.indexOf("Kohli")); // yeh firt index return karta h 
console.log(statement.lastIndexOf("Shastri")); // yeh last index return karta h 
console.log(statement.includes("Kohli")); // yeh dekhta h kya ek substring original string ke andar h y nhi 







//slicing and substring 
let str = "Namaste";
console.log(str.slice(0,3));
// slicing can take -ve indexes as well
// dono me [starting_ind,ending_index) aisa hoga => ending index include nhi hoga 
console.log(str.slice(-3,-1));
console.log(str.substring(0,3));
console.log(str.substr(0,3)); // iska matlab h start hoga 0 se aur 3 char dekhega





let txt = "Hello ji kaise ho ji";
console.log(txt.replace("ji","Namaste"));
console.log(txt.replaceAll("ji","Namaste"));




let str1 = "Money! Honey! Funny! Sunny";
// allows us to split from "! "
console.log(str1.split("! "));


// trim 
let str2 = " Namaste ";
console.log(str2);
console.log(str2.length);
console.log(str2.trim());
console.log(str2.trim().length);



// new way to create string 

let new_string = new String("Hello Coders!");

console.log(new_string);
console.log(typeof new_string);