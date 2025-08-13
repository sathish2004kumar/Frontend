let rows = 5;
let result = '';
for (let i = 0; i < rows; i++) {
    let spaces = ' '.repeat(i);
    let stars = '*'.repeat((rows - i) * 2 - 1);
    result += spaces + stars + '\n';
}
console.log(result);


let rows2 = 5;
let result2 = '';
let num = rows2 * 2 - 1;
for (let i = 1; i <= rows2; i++) {
    for (let j = 1; j <= num; j++) {
        result2 += i;
    }
    result2 += '\n';
    num -= 2;
}
console.log(result2);


let rows3 = 5;
let result3 = '';
for (let i = 0; i < rows3; i++) {
    let space = ' '.repeat(i);
    let numPart = (rows3 - i).toString().repeat((rows3 - i) * 2 - 1);
    result3 += space + numPart + '\n';
}
console.log(result3);


let rows4 = 5;
let result4 = '';
for (let i = 0; i < rows4; i++) {
    let space = ' '.repeat(rows4 - i - 1);
    let numPart = (i + 1).toString().repeat(i * 2 + 1);
    result4 += space + numPart + '\n';
}
console.log(result4);

let rows5 = 5;
let result5 = '';
for (let i = 1; i <= rows5; i++) {
    let space = ' '.repeat(rows5 - i);
    let numPart = '';
    for (let j = 1; j <= i; j++) numPart += j;
    for (let j = i - 1; j >= 1; j--) numPart += j;
    result5 += space + numPart + '\n';
}
console.log(result5);


let rows6 = 5;
let result6 = '';
for (let i = rows6; i >= 1; i--) {
    let space = ' '.repeat(i - 1);
    let numbers = '';
    for (let j = i; j <= rows6; j++) numbers += j + ' ';
    for (let j = rows6 - 1; j >= i; j--) numbers += j + ' ';
    result6 += space + numbers.trim() + '\n';
}
console.log(result6);

let rows7 = 5;
let result7 = '';
for (let i = 1; i <= rows7; i++) {
    let space = ' '.repeat(rows7 - i);
    let stars = '* '.repeat(i);
    result7 += space + stars.trim() + '\n';
}
console.log(result7);


let rows8 = 5;
let result8 = '';
for (let i = rows8; i >= 1; i--) {
    let space = ' '.repeat(rows8 - i);
    let stars = '* '.repeat(i);
    result8 += space + stars.trim() + '\n';
}
console.log(result8);
