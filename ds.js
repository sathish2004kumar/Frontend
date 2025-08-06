//duplicates
let a=[2,4,5,9,7,4,2,6];
let obj={};
for(let b of a){
    if(!obj[b]){
        obj[b]=1;
    } else {
        obj[b]++;
    }
}
    for(let b1 in obj){
        if(obj[b1]>1){
            console.log("Duplicate number:"+b1);
           }
    }
//unique numbers
 for(let b1 in obj){
        if(obj[b1]==1){
            console.log("unique number:"+b1);
           }
    }

// second largest number
let d=[9,2,4,5,7,10];
let Largest = 0;
let SecondLargest = 0;
for(let i=0; i < d.length; i++) {
    if(d[i] > Largest) {
        SecondLargest = Largest;
        Largest = d[i];
    } else if(d[i] > SecondLargest && d[i] < Largest) {
        SecondLargest = d[i];
    }
}
console.log("Largest number is: " + Largest);
console.log("Second largest number is: " + SecondLargest);

