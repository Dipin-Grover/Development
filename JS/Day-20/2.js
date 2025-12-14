// i have to make coundown timer for olympics 2028 

let desired_date = new Date("July 14 , 2028 00:00:00").getTime();




// now we have o caluclate differnce in time in ms 




function differnce()
{
    // i have to make coundown timer for olympics 2028 

    let desired_date = new Date("July 14 , 2028 00:00:00").getTime();




    // now we have o caluclate differnce in time in ms 


    let current_time = new Date().getTime();


    let diff = desired_date-current_time; // in millisecond time right now 


    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // maan lo agar din pure nhi hue toh hum unhe hours me bhi toh convert karenge let say 500 days and 18 hours like this


    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 *60) );




    let minutes = Math.floor((diff % (1000 * 60 *60)) / (1000 * 60 ) );

    let seconds = Math.floor((diff % (1000 * 60 )) / (1000 ) );


    document.getElementById("container").innerHTML = `Days : ${days}   Hours : ${hours}   Minutes : ${minutes}   Seconds : ${seconds}`;

}


setInterval(differnce  , 1000);





