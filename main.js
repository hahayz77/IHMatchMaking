const {match, lastmatch} = require("./models/matches");
const queue = require("./models/queue")

// console.log(lastmatch[0].result);
// console.log(lastmatch[1].result);

// resultado da média = 1,2,3,4;

// 1 e 2 ->  [0,2,5,3,1,4] 3comb;
// 3 -> [0,5,...];  
// 4 -> random;

let matchmaking;

let teamShuffle = [];
for( i=0 ; i < 6 ; i++ ){
    teamShuffle.push(queue[i]);
}
teamShuffle2 = Array.from(teamShuffle);

teamShuffle2.sort(function(a, b){return a.points - b.points});

dif1 = Math.abs((teamShuffle2[0].points + teamShuffle2[2].points + teamShuffle2[5].points) - (teamShuffle2[1].points + teamShuffle2[3].points + teamShuffle2[4].points));
dif2 = Math.abs((teamShuffle2[0].points + teamShuffle2[3].points + teamShuffle2[5].points) - (teamShuffle2[1].points + teamShuffle2[2].points + teamShuffle2[4].points));
dif3 = Math.abs((teamShuffle2[1].points + teamShuffle2[2].points + teamShuffle2[5].points) - (teamShuffle2[0].points + teamShuffle2[3].points + teamShuffle2[4].points));

if(dif1 <= dif2 && dif1 <= dif3){
    teamShuffle[0]=teamShuffle2[0];
    teamShuffle[1]=teamShuffle2[2];
    teamShuffle[2]=teamShuffle2[5];
    teamShuffle[3]=teamShuffle2[1];
    teamShuffle[4]=teamShuffle2[3];
    teamShuffle[5]=teamShuffle2[4];
}

if(dif2 <= dif1 && dif2 <= dif3){
    teamShuffle[0]=teamShuffle2[0];
    teamShuffle[1]=teamShuffle2[3];
    teamShuffle[2]=teamShuffle2[5];
    teamShuffle[3]=teamShuffle2[1];
    teamShuffle[4]=teamShuffle2[2];
    teamShuffle[5]=teamShuffle2[4];
}

if(dif3 <= dif1 && dif3 <= dif2){
    teamShuffle[0]=teamShuffle2[1];
    teamShuffle[1]=teamShuffle2[2];
    teamShuffle[2]=teamShuffle2[5];
    teamShuffle[3]=teamShuffle2[0];
    teamShuffle[4]=teamShuffle2[3];
    teamShuffle[5]=teamShuffle2[4];
}
console.log(teamShuffle);