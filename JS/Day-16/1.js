// reduce in js 


const arr = [1,2,3,4,5,6,7];

// const result = arr.reduce(call back fucntion ,initialization)

// we expect two things in call back function 

const ans = arr.reduce((accumulator,current_val) => {
    console.log(accumulator , current_val);
    accumulator += current_val;
    return accumulator;
},0)

console.log(ans);





// thoda advance exmaple of reduce isme hume ek fruits ki array di hui h aur hume ek object return karna h ki ek fruit kitni baar aa rha h uss fruit array me 


let fruit = ["apple" , "mango","kiwi","orange","mango","papaya","orange" , "kiwi" , "chiku"];


// here we will use reduce to count no of occurance of each fruit in fruit array 

let obj_1 = fruit.reduce((accumulator , current_val) => 
    {
        if(accumulator.hasOwnProperty(current_val))
        {
            // ye already exist karta h fruit array me yeh wala key 

            accumulator[current_val]++;
        }
        else{
            // this current fruit does not exist in fruit array 

            accumulator[current_val] = 1;
        }

        return accumulator;
    } , {});

// here initialzer is empty object here

console.log(obj_1);




// even shorter version using ternary operator  (condition) ? exp1 : exp2
// it means statement before exp 1 if evaluated to true then exp 1 will be evaluated 
// otherwise statement 2 will be executed 


let obj_2 = fruit.reduce((accumulator , current_val) => 
    {
        accumulator.hasOwnProperty(current_val) ? accumulator[current_val]++ : accumulator[current_val] = 1;
        

        return accumulator;
    } , {});

// here initialzer is empty object here

console.log(obj_2);











// set 

// ye by default c++ wala unordered h 
// here order does not matter 
let set1 = new Set([10,20,70 ,10,30,40,50]);


console.log(set1);


// one more way to create a set 


let set2 = new Set();

// add property 
set2.add(10);
set2.add(15);
set2.add(10);
set2.add("mohit");
set2.add(true);

console.log(set2);

// delete property

set2.delete(true);


// set size 
console.log(set2.size);





// lets say on insatgram a new user want to make id we will confirm that it should not be alredy created na 

let insta_id = new Set(["dipin_grover","kamlesh_12","divya_tiwari" , "shivamk_001"]);


let new_user = "divya_t";


console.log(insta_id.has(new_user));




// if i want to clear set then i will use this 

insta_id.clear();


console.log(insta_id);




// if i want array to be converted to set to avoid duplicate values 


let arr_1 = [10,20,30,20,50,10,40];

let set3 = new Set(arr_1);


console.log(set3);


// but if i want this set convert back to arr without having any duplicates i can do this 

let arr_2 = [...set3];
// ye ek ek karke values nikalega set 3 aur arrray me daal dega bhai 
// ... -> spread operator 


console.log(arr_2);






// if i want union of two sets 

let set4 = new Set([11,40,10,56,70]);
let set5 = new Set([70,80,40,12,56]);

let set6 = new Set([...set4,...set5]);

console.log(set6);





// if i want to find intersection of two sets then i can find that also

// i want to find ntersection of set 4 and set 5 
// i can use filter  and filter huemsha array ke upar lagta h 

const res = new Set([...set4].filter((num) =>set5.has(num)));
console.log(res);





// ietrte over set using for of loop 


for(let val of set4)
{
    console.log(val);
}




// iterate over set using for each loop 
console.log("\n");
set4.forEach((num) => console.log(num));






// learning map 
// map involve key value pairs 
// but in map key and value pair can be of any data type primitive or non primitive 


const map1 = new Map();

// inseeting value in map 
map1.set(3,90);
map1.set("Rohit",1);
map1.set(20,"Mohan");
map1.set("Naman",22);
// note that key should be unique here it will update key rohit here in this case and its value will be 15 
map1.set("Rohit",15);

console.log(map1);



// delete a key value pair in map 
map1.delete(3);


console.log(map1);


// how to check if a key is present in map 
console.log(map1.has("Rohit"));




// print size of map 

console.log(map1.size);



// clear the map 
map1.clear();

console.log(map1);




// another way to create map 
// 2 d array key value pair 
let map2 = new Map([
    [1,"raman"],
    ["chiku","Virat"],
    [45,"Rohit"]
])

console.log(map2);



// printing map using for of loop 


for(let [key,val] of map2)
{
    console.log(key,val);
}



// fo eacch in map 




let new_arr = map2.forEach((val,key) => console.log(key,val));









