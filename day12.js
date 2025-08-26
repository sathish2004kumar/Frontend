//Function
function addorEven(a){
    if(a % 2 === 0){
      console.log("Even number");
        } else {
        console.log("Odd number");
        }
   }
   addorEven(8);
   addorEven(17);

//Arrow Function
let addOrEven = (a) => {
    if (a % 2 === 0) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
    return a+10;
}
let result = addOrEven(-2);
console.log(result);
addOrEven(17);
addOrEven(18);

//Higher Order Function
function Forest(Animal){
    Animal();
}
function Lion(){
    console.log("Lion is roaring");
}
Forest(Lion);

//currying 
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c   ;
    }
}
}
let addEight = add(8);
console.log(addEight(10)(20)); 
console.log(add(27)(73)(0));

