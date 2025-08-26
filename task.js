let a =[2,3,5,6,7,3,2,4,5];
let obj={};
for(let i=0;i<a.length;i++){
    if(obj[a[i]]){
        obj[a[i]]=obj[a[i]]+1;
    }else{
        obj[a[i]]=1;
    }
}
console.log(obj);

let flower=[{name:"A",season:"summer"},{name:"A1",season:"summer"} ,{name:"A2",season:"summer"},
    {name:"B",season:"winter"},{name:"B1",season:"winter"},{name:"B2",season:"winter"},
    {name:"C",season:"monsoon"},{name:"C1",season:"monsoon"}];

let group={};
for(let i=0; i<flower.length; i++) {
    let season = flower[i].season;
    if(!group[season]) {
        group[season] = [];
    }
    group[season].push(flower[i]);
}
console.log(group);
