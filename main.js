const {match, lastmatch} = require("./models/matches");
const queue = require("./models/queue")

 console.log(Math.abs(lastmatch[lastmatch.length - 1].result[0] - lastmatch[lastmatch.length - 1].result[1]));

// resultado da média = 1,2,3,4,5;

// diferença = 5 e 4 ->  [0,2,5,3,1,4] melhor das 3 comb;
// diferença = 3 -> aleatorio das 3 comb
// diferença = 2 -> aleatorio das 6 comb   
// 1 -> random;

let matchmaking;

if(lastmatch.length >= 5){
    media = Math.ceil((Math.abs(lastmatch[lastmatch.length - 1].result[0] - lastmatch[lastmatch.length - 1].result[1]) + Math.abs(lastmatch[lastmatch.length - 2].result[0] - lastmatch[lastmatch.length - 2].result[1]) + Math.abs(lastmatch[lastmatch.length - 3].result[0] - lastmatch[lastmatch.length - 3].result[1]) + Math.abs(lastmatch[lastmatch.length - 4].result[0] - lastmatch[lastmatch.length - 4].result[1]) + Math.abs(lastmatch[lastmatch.length - 5].result[0] - lastmatch[lastmatch.length - 5].result[1]))/5);
}

if(lastmatch.length == 4){
    media = Math.ceil((Math.abs(lastmatch[lastmatch.length - 1].result[0] - lastmatch[lastmatch.length - 1].result[1]) + Math.abs(lastmatch[lastmatch.length - 2].result[0] - lastmatch[lastmatch.length - 2].result[1]) + Math.abs(lastmatch[lastmatch.length - 3].result[0] - lastmatch[lastmatch.length - 3].result[1]) + Math.abs(lastmatch[lastmatch.length - 4].result[0] - lastmatch[lastmatch.length - 4].result[1]))/4);
}

if(lastmatch.length == 3){
    media = Math.ceil((Math.abs(lastmatch[lastmatch.length - 1].result[0] - lastmatch[lastmatch.length - 1].result[1]) + Math.abs(lastmatch[lastmatch.length - 2].result[0] - lastmatch[lastmatch.length - 2].result[1]) + Math.abs(lastmatch[lastmatch.length - 3].result[0] - lastmatch[lastmatch.length - 3].result[1]) )/3);
}

if(lastmatch.length == 2){
    media = Math.ceil((Math.abs(lastmatch[lastmatch.length - 1].result[0] - lastmatch[lastmatch.length - 1].result[1]) + Math.abs(lastmatch[lastmatch.length - 2].result[0] - lastmatch[lastmatch.length - 2].result[1]))/2);
}

if(lastmatch.length == 1){
    media = Math.ceil(lastmatch[lastmatch.length - 1].result[0] - lastmatch[lastmatch.length - 1].result[1]);
}

if(lastmatch.length == 0){
    media = 0;
}

//console.log(media);

let teamShuffle = [];
for( i=0 ; i < 6 ; i++ ){
    teamShuffle.push(queue[i]);
}
teamShuffle2 = Array.from(teamShuffle);

teamShuffle2.sort(function(a, b){return a.points - b.points});


if(media >= 4){

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
}

if(media == 3){

    comb=Math.floor(Math.random() * 3);
    
    if(comb==0){
        teamShuffle[0]=teamShuffle2[0];
        teamShuffle[1]=teamShuffle2[2];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[1];
        teamShuffle[4]=teamShuffle2[3];
        teamShuffle[5]=teamShuffle2[4];
    }
    
    if(comb==1){
        teamShuffle[0]=teamShuffle2[0];
        teamShuffle[1]=teamShuffle2[3];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[1];
        teamShuffle[4]=teamShuffle2[2];
        teamShuffle[5]=teamShuffle2[4];
    }
    
    if(comb==2){
        teamShuffle[0]=teamShuffle2[1];
        teamShuffle[1]=teamShuffle2[2];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[0];
        teamShuffle[4]=teamShuffle2[3];
        teamShuffle[5]=teamShuffle2[4];
    }

}

if(media == 2){

    comb=Math.floor(Math.random() * 6);
    
    if(comb==0){
        teamShuffle[0]=teamShuffle2[0];
        teamShuffle[1]=teamShuffle2[2];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[1];
        teamShuffle[4]=teamShuffle2[3];
        teamShuffle[5]=teamShuffle2[4];
    }
    
    if(comb==1){
        teamShuffle[0]=teamShuffle2[0];
        teamShuffle[1]=teamShuffle2[3];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[1];
        teamShuffle[4]=teamShuffle2[2];
        teamShuffle[5]=teamShuffle2[4];
    }
    
    if(comb==2){
        teamShuffle[0]=teamShuffle2[1];
        teamShuffle[1]=teamShuffle2[2];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[0];
        teamShuffle[4]=teamShuffle2[3];
        teamShuffle[5]=teamShuffle2[4];
    }

    if(comb==3){
        teamShuffle[0]=teamShuffle2[0];
        teamShuffle[1]=teamShuffle2[1];
        teamShuffle[2]=teamShuffle2[5];
        teamShuffle[3]=teamShuffle2[2];
        teamShuffle[4]=teamShuffle2[3];
        teamShuffle[5]=teamShuffle2[4];
    }

    if(comb==4){
        teamShuffle[0]=teamShuffle2[0];
        teamShuffle[1]=teamShuffle2[2];
        teamShuffle[2]=teamShuffle2[4];
        teamShuffle[3]=teamShuffle2[1];
        teamShuffle[4]=teamShuffle2[3];
        teamShuffle[5]=teamShuffle2[5];
    }

    if(comb==5){
        teamShuffle[0]=teamShuffle2[1];
        teamShuffle[1]=teamShuffle2[2];
        teamShuffle[2]=teamShuffle2[3];
        teamShuffle[3]=teamShuffle2[0];
        teamShuffle[4]=teamShuffle2[4];
        teamShuffle[5]=teamShuffle2[5];
    }
    }

    if(media == 1){
        async function shuffle(o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        shuffle(teamShuffle);
    }

console.log(teamShuffle);
