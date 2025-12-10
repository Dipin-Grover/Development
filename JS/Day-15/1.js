// we will see use of for of loop 

const arr = [10,20,15,13,18];

for(let value of arr)
{
    console.log(value);
}

let str = "Coder Army";
for(let iter of str)
{
    console.log(iter);
}

// but we cannot use for of loop on object 

let user = {
    name : "Divya",
    age : 22,
    gender : "Female"
}

// for(let it of user)
// {
//     console.log(it);
// }






// but i want to use for of loop on object then i can use that 

// for(let val of Object.keys(user))
// {
//     console.log(val , user[val]);
// }





// for each loop on array 


let arr_1 = [10,20,30,40,50,60];
// arr_1.forEach(CallBackFunction)

// for each loop expects a call back function inside it 

// if i pass one arguemeent then that arguemenet will be array values 
// if i pass two arguements then first value will be array values and second one would be index of array 

// if i paas three arguemenets then first will be array values , second will be index of array and third would be array itself passed
arr_1.forEach(function(num,num_1 , arr)
{
    console.log(num,num_1,arr);
})







// i can also manipulate array by this and can also use arrow function here 

// arr_1.forEach((num,ind,a) => {
//     a[ind]*=2;
// })

// console.log(arr_1);







// more cleaner way to write this by avoiding arrow function 

function greet(num)
{
    console.log(num);
}

arr_1.forEach(greet);












// filter is similar as for each 

let arr_2 = [10,23,28,95,78,46];

// i want to find numbers that are even 
let work = function(num)
{
    if(num % 2 == 0)
    {
        return num;
    }
}

let new_arr = arr_2.filter(work);

console.log(new_arr);





// writing same thing as above by using arrow function 
// smaller code 
let new_arr_1 = arr_2.filter((num) =>  num % 2==0
)

console.log(new_arr_1);





// more difficult example of filter 


let new_arr_2 = [
    {name: "Dipin", age: 22 , marks: 35 },
    {name: "Divya" , age : 21 , marks : 40},
    {name:"Shivam", age: 23 , marks: 85 },
    {name: "Mayank", age: 22 , marks: 70 },
    {name: "Yogesh", age: 22 , marks: 45 },
    
]


// now i want to filter according to marks 

// const info = new_arr_2.filter((mark) => mark.marks>50);

// above one but not paaaing whole object but using destructuring 

let info = new_arr_2.filter(({marks : student_mark}) => student_mark > 50);

console.log(info);







// map 
// using map i can modify elements 


const Arr = [1,2,3,4,5];

let new_one = Arr.map((num) =>{
    return num* num;
})

console.log(new_one);

// map, filter ,for each tino ka syntax kaafi milta julta h hum inme teen chize paas kar sakte h element,index,array



// we cn also chain things like map and filter 
// if i want even eleemnt unka square ka half values 
const current_arr = [1,2,3,4,5,6];

const res = current_arr.filter((num) => num%2 ==0).map((num) => num*num).map((num) =>num/2);

// 2 ,4,6  even h => inka  square => 4,16,36 => inka half ho gya 2,8,18
console.log(res);





// for each me kuch bhi return nhi hota h 

// filter me true false return hota h 

// map me hum elements ko modify karte h 





//reduce dekhna h hume isme 

//lets say i want to find sum of array values 

let val = [1,2,3,4,5,6,7];

// isme hum 2 argueemnts  pass karte h 
let ans = val.reduce((accumulator,element) => accumulator + element , 0);

// 0 will be accumulator initial value

console.log(ans);
