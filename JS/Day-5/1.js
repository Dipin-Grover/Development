let a = 10;
let b = a;
b = 30;
console.log(a);
console.log(b);

// primitive vs non primitive 
// primitive : they can't be chnaged (Immutable)
// non primitive : they can be changed (Mutable)


let obj1 = 
{
    id:10,
    name: "Dipin"
}

let obj2 = obj1;


obj2.id=30;

console.log(obj1);
console.log(obj2);

