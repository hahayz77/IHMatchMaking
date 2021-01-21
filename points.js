let calcPlayersA, pointsA;
let calcPlayersB, pointsB;
let calcPoints = 5;
let modPtsA;
let pts_a;
let pts_b;
let modPtsB;
let p1 = 10; let p2 = -20; let p3 = 10;
let p4 = 20; let p5 = -20; let p6 = 0;

// // Range de pontuação, quanto maior menos balanceado
// modPtsA = Math.abs(p1) + Math.abs(p2) + Math.abs(p3); console.log("MODA: "+modPtsA); //50 - Menos balanceado
// modPtsB = Math.abs(p4) + Math.abs(p5) + Math.abs(p6); console.log("MODB: "+modPtsB); //45

calcPlayersA = p1 + p2 + p3;
calcPlayersB = p4 + p5 + p6; 


if(calcPlayersA > calcPlayersB){ // TIME A MELHOR
    switch (calcPoints) {
        case 5:                     // 5x0
            pts_a = 6; pts_b = -6;           break;
        case 4:                     // 5x1
            pts_a = 5; pts_b = -5;           break;
        case 3:                     // 5x2
            pts_a = 4; pts_b = -4;           break;  
        case 2:                     // 5x3
            pts_a = 3; pts_b = -3;           break;
        case 1:                    // 5x4
            pts_a = 2; pts_b = -2;           break;  
        case -1:                    // 4x5
            pts_a = -2; pts_b = 2;           break;   
        case -2:                    // 3x5
            pts_a = -4; pts_b = 4;           break;
        case -3:                    // 2x5
            pts_a = -6; pts_b = 6;           break;
        case -4:                    // 1x5
            pts_a = -8; pts_b = 8;           break;
        case -5:                    // 0x5
            pts_a = -10; pts_b = 10;           break;
        default:                    
            pts_a = 0; pts_b = 0;
      }
}

if(calcPlayersA < calcPlayersB){ // TIME B MELHOR
    switch (calcPoints) {
        case -5:                     // 5x0
            pts_b = 6; pts_a = -6;           break;
        case -4:                     // 5x1
            pts_b = 5; pts_a = -5;           break;
        case -3:                     // 5x2
            pts_b = 4; pts_a = -4;           break;  
        case -2:                     // 5x3
            pts_b = 3; pts_a = -3;           break;
        case -1:                    // 5x4
            pts_b = 2; pts_a = -2;           break;  
        case 1:                    // 4x5
            pts_b = -2; pts_a = 2;           break;   
        case 2:                    // 3x5
            pts_b = -4; pts_a = 4;           break;
        case 3:                    // 2x5
            pts_b = -6; pts_a = 6;           break;
        case 4:                    // 1x5
            pts_b = -8; pts_a = 8;           break;
        case 5:                    // 0x5
            pts_b = -10; pts_a = 10;           break;
        default:                    
            pts_b = 0; pts_a = 0;
      }
}

else{
    if (calcPoints > 0){
        pts_a = calcPoints;
        pts_b = -calcPoints;
    }
    else if(calcPoints < 0){
        pts_a = calcPoints;
        pts_b = -calcPoints;        
    }
    else{
        pts_b = 0;
        pts_a = 0;
    }
}

console.log(pts_a);
console.log(pts_b);
