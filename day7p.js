// patterns
// 1. left to right
let rows = 5;
let result = '';
let cols = 1;
for (let i=1; i <= rows; i++) {
    for (let j =1; j<=cols; j++){
        result +='*';
    }
    result += '\n';
    cols +=2;
}
console.log(result);

// 2. number pattern
let row = 5;
let results = '';
let col = 1;
for (let i=1; i <= row; i++) {
    let num = 1;
    for (let j =1; j<=col; j++){
        results += num++;
    }
    results += '\n';
    col +=2;
}
console.log(results);

// 3.spaces pattern
let rowss = 5;
let resultss = '';
let spaces = rowss * 2-2;
let colss = 1;
for (let i=1; i <= rowss; i++) {
     for (let j =1; j<=spaces; j++){
        resultss +=' ';
    }
    for (let j =1; j<=colss; j++){
        resultss +='*';
    }
    resultss += '\n';
    colss+=2;
    spaces -= 2;
}
console.log(resultss);

// 4.reverse
let rowsss = 5;
let resultsss = '';
let colsss = rowsss * 2- 1;
for (let i=1; i <= rowsss; i++) {
    for (let j =1; j<=colsss; j++){
        resultsss +='*';
    }   
    resultsss += '\n';
    colsss -= 2;
}
console.log(resultsss);
