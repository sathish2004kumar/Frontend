let a={name:"sk",class:"java"};

Object.freeze(a);
a["name"]="Ap"

console.log(a);
console.log(Object.values(a));
console.log(Object.keys(a));