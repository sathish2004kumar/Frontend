let a="null";
let c;
let e=true;
let f=12;
console.log(a);
console.log(c);
console.log(e);
console.log(f);

let b=[8,12,16,20,24];
b[5]=32;
console.log(b);
console.log(b[2]);
console.log(b.length);
let d=b;
d[5]=28;
console.log(d);

let g={name:"sksk",name1:"vk"};
console.log(g["name"]);
g["name2"]="Ap";
g["name"]="sk";
console.log(Object.values(g));
console.log(Object.keys(g));

let z={name:"sksk" , name1:"vk"};
Object.seal(z);
z["name"]="sk";
z["name2"]="Ap";
console.log(z);

let y={name:"AK",name1:"BK"};
Object.freeze(y);
y["name"]="Ap";
y["name1"]="MSD";
console.log(y);

