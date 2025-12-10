// hum kabhi bhi for in loop use nhi karte h for array 


let arr = [10,31,45,7,89];


for(let key in arr)
{
    console.log(key , arr[key]);
}

console.log("\n");


// but yha toh shi chal rha h  toh hum isse use kyu nhi karte h 

// array ek object hota h -> yes 

arr.name = "Dipin";




// here name will also be a key 


arr.value = 17;

for(let key in arr)
{
    console.log(key , arr[key]);
}


// need to see define properties in js 

// as hw 

// hw done here
let obj = {};


Object.defineProperties(obj , {
    name : {
        value: 23,
        writable: true,
        configurable : true,
        enumerable : true

    },
    gender : {
        value : "Male",
        writable : true,
        configurable : true , 
        enumerable : true,
    }
}
    
)


console.log(obj);
