const d = new Date();

console.log(d);

console.log(d.toDateString());

console.log(d.toString());

console.log(d.getDate()); // displays date 

console.log(d.getDay()); // sun(0) , mon(1) , tue(2) , wed(3) , thurd(4) , fri(5) , sat(6)

console.log(d.getMonth());
// jan/feb/march
// 0  , 1 , 2 so on so nov will get 10 

console.log(d.getFullYear());

console.log(d.getHours());

console.log(d.getMinutes());

console.log(d.getTime());

console.log(Date.now());

let da = new Date("2020-03-15T10:35:58");
console.log(da);
console.log(da.toDateString());

let n = new Date(2021,3,27);
console.log(n.toDateString());

console.log(n.toString());

let s = new Date(2023,10,19,10,34,25,786);
console.log(s.toString());


const h = new Date();

h.setFullYear(2020);
h.setMonth(5);
h.setDate(12);

console.log(h.toString());
