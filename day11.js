let a =[2,3,5,6,7,3,2,4,5];
let obj={};
for(let i=0;i<a.length;i++){
    if(obj[a[i]]){
        obj[a[i]]++;
    }else{
        obj[a[i]]=1;
    }
console.log(obj);
}