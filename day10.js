//Map
let z=new Map();
z.set("name","A");
z.set("age",20);
console.log(z);
console.log(z.get("name"));
console.log(z.has("age"));
console.log(z.size);
z.set("city","Delhi");
console.log(z);
console.log(Array.from(z.keys()));
console.log(Array.from(z.values()));
console.log(z.entries());

//set
let s=[0,2];
let s1=new Set(s);
s1.add(3);
s1.add(2);
s1.add(4);
s1.add(5);
s1.add(6);
console.log(s1);
console.log(s1.has(3));
console.log(s1.size);
console.log(s1.delete(2));
console.log(s1);
console.log(s1.size);