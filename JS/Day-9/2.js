let date_1 = new Date();
let date_2 = new Date("2024-07-15");

console.log(date_1-date_2);
// diuffernce between the dates is in milliseconds
console.log(date_1 > date_2);



//coundown timer of t20 world cup 2026 
let current = new Date();
let desired = new Date("2026-02-07T00:00:00");

let diff = desired-current;

// in days hours minutes 

let days_left = Math.floor(diff  /  (1000 * 60 * 60 * 24) );


let hours_left = (Math.floor(diff / (1000 * 60 * 60 ))) % 24; //modulo because what if 27 hour -> 1 day 3 hours  i want thi way hour always less than 24 so remainder

let minutes_left = (Math.floor(diff / (1000 * 60 ))) % 60; 

let seconds_left = (Math.floor(diff/ 1000)) % 60; 


console.log(`countdown timer for t20 world cup 2026 is Days: ${days_left} Hours: ${hours_left} Minutes: ${minutes_left} Seconds: ${seconds_left} `);