// if else statements 

let age = 9;

if(age >= 18)
{
    console.log("You are eligible for voting.");
}
else{
    console.log("You are not eligible for voting.");
}




// if else-if  else statements

let age_2 = 20;

if(age_2 < 18)
{
    console.log("You are a child ");
}
else if(age_2 > 45)
{
    console.log("Old person");
}
else{
    console.log("Young person");
}




// using switch statements 

let temp = new Date();
let today_day = temp.getDay();

let num = 10;

// here === is used strict equality operator 

switch(today_day)
{
    case 0:
        console.log("Today is sunday ");
        break;

    case 1:
        console.log("Today is monday");
        break;

    case 2:
        console.log("Today is tuesday");
        break;

    case 3:
        console.log("Today is wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6 :
        console.log("Today is Saturday");
        break;

    default : 
        console.log("Not a valid day");

}



// loop  : ek hi kaam ko baar baar karna 


// ek hi line ko 5 baar print karna h 
for(let i = 0 ; i<5 ; i++)
{
    console.log("Hello Coder Army");
}




// sum of first 10 numbers fom 1 to 10 
let sum = 0;
for(let i = 1 ; i <= 10 ; i++ )
{
    sum += i;
}

console.log(sum);






// nested loops 
// lets say i want to print 12345 6 times 
// 12345
// 12345
// 12345
// 12345
// 12345
// 12345

for(let i = 0 ; i<6 ; i++)
{
    let row = "";
    for(let j = 1 ; j<=5 ; j++)
    {
        row += j;
    }
    console.log(row);
}




//what if i want them tab spaces apart in each line 

for(let i = 0 ; i<6 ; i++)
{
    let row = "";
    for(let j = 1 ; j<=5 ; j++)
    {
        row += j + '\t';
    }
    console.log(row);
}



// what if i want them in next line 
// it will display it like 
//1
//2
//3
//4
//5

//1
//2
//3
//4
//5

// in this way 
for(let i = 0 ; i<6 ; i++)
{
    let row = "";
    for(let j = 1 ; j<=5 ; j++)
    {
        row += j + '\n';
    }
    console.log(row);
}



