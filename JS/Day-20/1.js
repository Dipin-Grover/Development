function timing()
{
    let outer_container = document.getElementById("root")
let time = document.getElementById("timer");

let current_time = new Date();

let ind_time = current_time.toLocaleTimeString();

time.innerHTML = ind_time;
}


setInterval(timing,1000);

// mujeh time ko ab bich me lana h 


let outer_container = document.getElementById("root")
let time = document.getElementById("timer");

outer_container.style.height = "100vh"

outer_container.style.display = "flex";

outer_container.style.justifyContent = "center";

outer_container.style.alignItems = "center";

time.style.fontSize = "100px";









