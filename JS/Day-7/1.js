let num1 = 123;
let num2 = new Number(456);
console.log(num2);
console.log(typeof num2);


let num_1 = 231;
let num_2 = new Number(231);
let num_3 = new Number(231);

console.log(num_1 == num_2);
//num_1 ek number h whi num_2 ek object h ye  convert hoga number me toh 231 bnega 
console.log(num_2 == num_3);
//num2 aur num3 dono number h ek hi datatype ke h dono refernce store kareng stack me object ka ek ka maan lo 6231 h aur dusre ka raddress h 9393 toh same kh hi hue



let num_4  =3456.12784;
console.log(num_4.toFixed(3)); // no of digits after decimal
console.log(num_4.toPrecision(3)); // total numbe of digits in num

console.log(num_4.toExponential(5)); //decimal ke baad 5 digits aayenge 

console.log( typeof num_4.toString());

console.log(num_4.valueOf());


// maths 
console.log(Math.E); // here E is e  = 2.72
console.log(Math.LN10) // log10 with base e


// floor and ceil 
let num3 = 56.67;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));


let num4 = 45;
console.log(Math.floor(num4));
console.log(Math.ceil(num4));




//  random function

console.log(Math.floor(Math.random() * 10));


console.log(Math.ceil(Math.random() * 10));
// but ek catch h isme agar 0 aa gya toh 


// if i want to generte numbers from 0 to 10 

// 0 to 10

console.log(Math.floor(Math.random() * 11));



// ludo game from 1 to 6 

console.log(Math.floor(Math.random()*6 + 1)) 



