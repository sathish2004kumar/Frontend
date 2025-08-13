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
