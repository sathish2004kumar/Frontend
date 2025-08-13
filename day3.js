// logical operators (and && -- or ||)
// (and &&)
console.log(3>2 && 2<7);
console.log("sk"=="Ap" && 10==10);
console.log(true!=false && true==true);
console.log(null>=15 && 15<=undefined);;
// (or ||)
console.log(10>20 || 20<10);
console.log("sk"=="Ap" || 10!=10);
console.log(100>=100 || 100<=50);
console.log(21<null || undefined>20);

// bitwise operator (and & - or | - xor ^)
// (and &)
console.log(10 & 8);
console.log(16 & 4);
// (10 & 8)                       ( 16 & 4) 
// 8 4 2 1   ->binary code        16 8 4 2 1   ->binary code           
// 1 0 1 0   ->10                  1 0 0 0 0   ->16
// 1 0 0 0   ->8                   0 0 1 0 0   ->4
// 1 0 0 0   <-Answer is 8         0 0 0 0 0   <-Answer is 0

//(or |)
console.log(2 | 4);
console.log(18 | 12);
// ( 2 | 4)                       (18 | 12) 
// 8 4 2 1 ->binray code           16 8 4 2 1 ->binary code
// 0 0 1 0 ->2                      1 0 0 1 0 ->18
// 0 1 0 0 ->4                      0 1 1 0 0 ->12
// 0 1 1 0 <-Answer is 6            1 1 1 1 0 <-Answer is 30

//(xor ^)
console.log(5 ^ 10);
console.log(14 ^ 20);
// ( 5 ^ 10)                       (14 ^ 20) 
// 8 4 2 1 ->binray code           16 8 4 2 1 ->binary code
// 0 1 0 1 ->5                      0 1 1 1 0 ->14
// 1 0 1 0 ->10                     1 0 1 0 0 ->20
// 1 1 1 1 <-Answer is 15           1 1 0 1 0 <-Answer is 26


// unary operators (increment ++ -- -)

let z=10;

console.log(++z); 

console.log(z++);

console.log(--z);

console.log(z--);

console.log(+z);

console.log(-z);

console.log(10>20 || 20<10);

console.log(null==100 || undefined==0);

//assignment operators (+= -= *= /= %=)
let x=10;
console.log(x+=5);
console.log(x-=3);
console.log(x*=2);
console.log(x/=4);
console.log(x%=0);

let y=5;
console.log(++y);
console.log(y++);

console.log("Ap"==true);
console.log(10===10);


let age=10;
if(age>18){
    console.log("Eligible for voting");
}
else{
    console.log("Not eligible for voting");
}