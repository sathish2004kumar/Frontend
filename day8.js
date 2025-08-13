// input -> 2a3b4c
// output -> aabbbcccc
let a="aabbccccc";
let result = " ";
let digit = 0;
for (let i =0; i <a.length; i++) {
    if (!isNaN(a[i])) {
        digit = parseInt(a[i]);
    } else {
        result +=a[i].repeat(digit);
        digit = 0;
    }
    }
    console.log(result);
    
// input -> aabbbcccc
// output -> 2a3b4c
let b = "aabbbcccc";
let result1 = "";
let count = 1;
for (let i = 0; i < b.length; i++) {
    if (b[i] == b[i + 1]) {
        count++;
    } else {
        result1 += count + b[i];
        count = 1;  
    }
}
console.log(result1);