let a=[4,2,1];
a[3]=5;
console.log(a);

a[a.length]=6;
console.log(a);
a.push(8);
console.log(a);
a.unshift(0);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.splice(1,2,1,2);
console.log(a);
console.log(a.slice(0,3));
a.copyWithin(3,0,2);
console.log(a);
a.fill(7,0,4);
console.log(a);
console.log(a.indexOf(7));
console.log(a.lastIndexOf(7));
console.log(a.includes(7));
console.log(a.join(' '));

let b=[7,3,5,4,1,2];
for(let i=0; i<b.lenght; i++) {
    for(let j=i+1; j<b.lenght;j++) {
        if(b[i]>b[j]){
            let bkp = b[i];
            b[i] = b[j];
            b[j] = bkp;
        }
    }
}
console.log(b);

b.sort((a,b)=>a - b);
console.log(b);

let c=[1,2,3,[4,5,[6,7,8]]];
c=c.flat(Infinity);
console.log(c);