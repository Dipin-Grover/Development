// callback funcion 

// // way -1 
// function gun(temp)
// {
//     console.log("Hello I am gun.");
//     temp();
// }

// function call()
// {
//     console.log("Hello i am callback function.");
// }


// gun(call);






// second way 
// function gun(temp)
// {
//     console.log("Hello I am gun.");
//     temp();
// }




// gun(function call()
// {
//     console.log("Hello i am callback function.");
// });



// third way using arrow function 
function gun(temp)
{
    console.log("Hello I am gun.");
    temp();
}

function call()
{
    console.log("Hello i am callback function.");
}


gun( () => {
    console.log("Hello i am callback function.");
}
);







// lets see the usag of callback function 

function fetchData()
{
    console.log("I am fetching data .");
}

setInterval(fetchData,5000);

// here fetchdata function will be called every 5 sec
