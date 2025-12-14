// abhi tak humne dekh lia h selection by id and selection by className

// aise hota h 
// document.getElementById("first");

// document.getElementsByClassName("yo");



//ab hum dekhenge select by css selectors 

// case1 single element ko select karne ke lie  but maan lo tumne use kia class toh yeh bas phli wali class ko hi select karega 
// querySelector



// let ele_1 = document.querySelector("#first");
// ele_1.innerHTML = "Chota Don";


// case 2 sabko select karna ho same clasas me toh hum use karenge querySelectorAll
// multiple elements me ye hume nodelist dega 


let ele_2 = document.querySelectorAll(".header1");
console.log(ele_2);


// method -1 to iterate over node list 
// using simple for loop
for(let i = 0 ; i<ele_2.length ; i++)
{
    ele_2[i].style.color = "red";
}



 
// method-2 to iterate over node list 
// using for each loop

ele_2.forEach((val) =>
{
    console.log(val);
})


// method 3 using for in loop
// using for in loop
for(let val of ele_2)
{
    console.log(val);
}


// convert nodelist to array 
let ele_2_arr = Array.from(ele_2);


console.log(ele_2_arr);








// select element by tag name
// we will use getElementsByTagName
let ele_3 = document.getElementsByTagName("li");

console.log(ele_3);
console.log(ele_3[2]);
// iteration over this 
// method -1 
// by using for loop
for(let i = 0 ; i<ele_3.length ; i++)
{
    ele_3[i].style.color = "yellow";
}



// method -2
// by using for off loop 
for(let temp of ele_3)
{
    console.log(temp);
}

// method -3
// converting html collection to array 
let temp_2 = Array.from(ele_3);


// now i can use foreach

temp_2.forEach((val) => {
    console.log(val);
})





//select using relationships like ancestors child siblings 


// 1. accessing parent node
// using parent node or parent element 
let obj_1 = document.querySelector('li');
console.log(obj_1.parentElement);
console.log(obj_1.parentNode);



//2. accessing child node
// 1. way using childnodes
let obj_2 = document.querySelector('ul');
console.log(obj_2);
console.log(obj_2.childNodes);
// ye nodelist me 9 value return kar rha h 
// ye spaces jo list items ke bich h usse bhi count karta 
// jab ek hi line me saari items rakhi toh 6 elements ho gyi node list me 

// 1 space phle ka 1 space baad ka 

// 2 way k a child accesska wo h children
console.log(obj_2.children);


// accesing firt and last child
// two ways using nextfirst child and first element child


console.log(obj_2.firstChild);
console.log(obj_2.firstElementChild);



console.log(obj_2.lastChild);
console.log(obj_2.lastElementChild);



//accessing sibling nodes

let obj_3 = document.querySelector('li');
console.log(obj_3.nextSibling);
console.log(obj_3.nextElementSibling);


let obj_4 = document.getElementById("last")
console.log(obj_4.previousSibling);
console.log(obj_4.previousElementSibling);




// 3 chize h innerhtml,innertext,textcontent
// jaise hi army ko display none kia 

// yeh toh pura dikhayega 
//<strong style="display: none;">Hello Coder Army</strong>
let ele_4 = document.getElementById("first").innerHTML;
console.log(ele_4);

// yeh aise dikhayega 
// Hello Coder Army
let ele_5 = document.getElementById("first").innerText;
console.log(ele_5);

// ye aise dikhaayega 
// Hello Coder
let ele_6 = document.getElementById("first").textContent;
console.log(ele_4);





