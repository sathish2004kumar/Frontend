// Statements
// conditional , iterative , switch , jump

// conditional statements
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}

let marks = 85;
if (marks >= 90) {
    console.log("Grade A"); 
}
else if (marks >= 80) {
    console.log("Grade B");
}
else {
    console.log("Grade C");
}   

// True conditions
if(" "){
    console.log("This is true");            
}
else{
    console.log("This is false");
}

if(8){
    console.log("This is true");            
}       
else{
    console.log("This is false");
}

if(8<18){
    console.log("This is true");            
}
else{
    console.log("This is false");
}


// false conditions
if(0){
    console.log("This is true");            
}       
else{
    console.log("This is false");
}

if(null){
    console.log("This is true");            
}   
else{
    console.log("This is false");
}   

if(undefined){
    console.log("This is true");            
}   
else{
    console.log("This is false");
}

// nested if statements
let num = 24;   
if(num > 0) {
   
    if(num % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("Number is negative or zero");
}

let number = 11;   
if(number > 0) {
   
    if(number % 2 === 1) {
        console.log("Number is odd");
    } else {
        console.log("Number is even");
    }
} else {
    console.log("Number is negative or zero");
}

// iterative statements
let i = 11;      
while(i <= 15) {
    console.log("Iteration number: " + i);
    i++;
}
let j = 21;
do {
    console.log("Iteration number: " + j);
    j++;
}
while(j <= 25);
for(let k = 11; k <= 15; k++) {
    console.log("Iteration number: " + k);
}

