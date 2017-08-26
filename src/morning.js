var witch ={
    cure: true,
}
let goblin = [];
for(let i = 0;i<100;i++){
    goblin.push({goblin: i,
        cure: false,
    })
}
console.log(goblin[2].goblin);
let test = 2

function goblinTest(number){
if(number <100){
    for(let i = 0; i<100;i++){
        if(goblin[i].goblin%number ==0){
            goblin[i].cure=false;
           return goblinTest(number+1)
        }
        else{
            goblin[i].cure = true;
            return goblinTest(number+1)
        }
    }
}
}
console.log(goblin);
goblinTest(0);