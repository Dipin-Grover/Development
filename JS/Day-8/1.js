let arr = [2,1,5,6,9,"chiku",true , undefined , NaN,9];
console.log(arr);

// lengh of array 
console.log(arr.length);

//acess array elements 
console.log(arr[5]); 

// using at allows us to use +ve index and -ve
console.log(arr.at(-3));

let arr_1 = arr;

console.log(arr_1);
console.log(arr_1 == arr);

// structured clone array ki ek copy create karne ke lie hota 
let arr_2 = structuredClone(arr);
console.log(arr_2 == arr);

// push element to end of array 
arr.push(45);
console.log(arr);

// pop the last element 
arr.pop();
console.log(arr);

// add element in front
arr.unshift(12);
console.log(arr);


// deleet element from front 
arr.shift();
console.log(arr);


// it will delete the item at 0th index but space will still be reserved and a hole will be created
delete arr[0];
console.log(arr);

arr[0] = "tmkc";
console.log(arr);



// index of an element
console.log(arr.indexOf(9)); // return first index of element
console.log(arr.lastIndexOf(9)); // return last index of element
console.log(arr.includes("chiku")); // it tells whetehr this elemeent present in array or not 




// slice and splice 


// slice will return portion of array and it will not effect the original array  end index not included here 
console.log(arr.slice(2,5));

console.log(arr);


// it will also give us portion of array starting from index 2 and should have 4 element in that 

// it will affect the original array iit will cut portion of it from original array 


// console.log(arr.splice(2,4));

// here i will receive portion of array on which i have not used spliced 


// console.log(arr);





console.log(arr);

// by using splice i can also remoove element from a position and i will tell how many elements to delete and then also i can tell to add more eleemnt from that index


// arr.splice(2,3,"shivam",true,90);

console.log(arr);




//  if i want that using splice i do not want to delete anything but add extra elements 
arr.splice(2,0,"rishi",12,null);
console.log(arr);



// using join 
console.log(arr.join(" "));
console.log(arr.toString());
console.log(arr.join(" "));



// concat function 
let arr1 = [2,3,4,5];
let arr2 = [12,56,78,24];
let arr3 = [19,34,98,13];

let arr4 = arr1.concat(arr2,arr3);

console.log(arr4);


let arr_3 = [12,56];
let arr_4 = [1,78,"dg",true];

arr_3.push(arr_4); // pushes entire arr_4 = [1,78,"dg",true] in arr_3


console.log(arr_3);


console.log(arr_3[2][2]); 




// 2-d array 


let arr5 = [1,2,3,4,5,6,7,8,9];

let arr6 = [[1,2,[10,11,12]],[4,5,6],[7,8,9]];

console.log(arr6);

console.log(arr6[2][1]);



// convert 22-d array to normal 1-d array 
let arr7 = arr6.flat(2); // i will give inner value to tell which nesteding i have to flat 
// like if i give value 2 it will flat till 3 nested array  if  i want to convert to flat i can use infinity

console.log(arr7);


// cheking if object is array 
let arr8 = [1,2,3,4,5];
console.log(Array.isArray(arr8));
// tells us that arr8 is an array


// using new keyword 
let arr9 = new Array(10);
// if i give only one no as input it will give 10 size empty array 
console.log(arr9.length);
console.log(arr9);




let arr10 = new Array(10,20,30);

console.log(arr10);
console.log(arr10.length);






