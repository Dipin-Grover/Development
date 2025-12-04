// i have to see whether in js pass by refernce is there or pass by value 

let arr = [10,20,30,40,50];

function modify(arr)
{
    arr[0] = 15;

    console.log(arr);
}


modify(arr);

console.log(arr);

// dono me change ho gye 
// it means they both work on same

// pass by refernce h 




// 
