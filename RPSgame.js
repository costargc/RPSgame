let userScore = 0;
let drawScore = 0;
let computerScore = 0;
let round = 0;

const userScore_div = document.getElementById("user-score");
const drawScore_div = document.getElementById("draw-score");
const computerScore_div = document.getElementById("computer-score");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const userHand_src = document.getElementById("user-hand");
const computerHand_src = document.getElementById("computer-hand");

const round_div = document.getElementById("action-message");

//Dummy AI starts with a random selection
var game = Array.from({length: 20}, () => Math.floor(Math.random() * 3));


game.shift(); game.push(0);

rock_div.addEventListener('click', function() {
    //console.log("clicked rock");
    userHand_src.src="images/rock.png";
    AIchoose=AIselection(game);
    computerHand_src.src="images/AI"+AIchoose+".png";
    game.shift(); game.push(0); //Adds a rock for the kicks of it (psichology says that rock is the most commom)
    
    if (AIchoose=="rock"){drawScore++;}
    else if (AIchoose=="paper"){computerScore++;}
    else {userScore++;}

    drawScore_div.innerHTML=drawScore;
    computerScore_div.innerHTML=computerScore;
    userScore_div.innerHTML=userScore;

    round++;
    round_div.innerHTML="Round "+round;

})

paper_div.addEventListener('click', function() {
    //console.log("clicked paper");
    userHand_src.src="images/paper.png";
    AIchoose=AIselection(game);
    computerHand_src.src="images/AI"+AIchoose+".png";
    game.shift(); game.push(1);

    if (AIchoose=="paper"){drawScore++;}
    else if (AIchoose=="scissors"){computerScore++;}
    else {userScore++;}

    drawScore_div.innerHTML=drawScore;
    computerScore_div.innerHTML=computerScore;
    userScore_div.innerHTML=userScore;
    
    round++;
    round_div.innerHTML="Round "+round;

})

scissors_div.addEventListener('click', function() {
    //console.log("clicked scissors");
    userHand_src.src="images/scissors.png";
    AIchoose=AIselection(game);
    computerHand_src.src="images/AI"+AIchoose+".png";
    game.shift(); game.push(2);

    if (AIchoose=="scissors"){drawScore++;}
    else if (AIchoose=="rock"){computerScore++;}
    else {userScore++;}

    drawScore_div.innerHTML=drawScore;
    computerScore_div.innerHTML=computerScore;
    userScore_div.innerHTML=userScore;
    
    round++;
    round_div.innerHTML="Round "+round;

})

function AIselection(game){

guide = {0:'rock',1:'paper',2:'scissors'}
counter = {rock:'paper',paper:'scissors',scissors:'rock'}

//Define all zero 3rd lvl Markov Matrix
var MarkovMatrix3D = Array(
    Array(Array(0,0,0),Array(0,0,0),Array(0,0,0)),
    Array(Array(0,0,0),Array(0,0,0),Array(0,0,0)),
    Array(Array(0,0,0),Array(0,0,0),Array(0,0,0)),
)

//Super elegant way to count and produce the markov matrix
for(let n=0; n < game.length - 2;n++){
    MarkovMatrix3D[  game[n]  ][   game[n+1]   ][    game[n+2]   ] += 1;
}

//Choose based on the MarkovMatrix what is the most likely next play.
ac=0;
while(ac==0){
    //select random from 0 <= x <= 2 (R,P,S)
    selection = Math.floor(Math.random() * 3);
    
    
    //calculate prob
    base =  MarkovMatrix3D[game[game.length-2]][game[game.length-1]][0]+
            MarkovMatrix3D[game[game.length-2]][game[game.length-1]][1]+
            MarkovMatrix3D[game[game.length-2]][game[game.length-1]][2];

        if(base==0){
            prob = 1/3;
        }
        else {
            prob = MarkovMatrix3D[game[game.length-2]][game[game.length-1]][selection]/base;
        }

        //activation probability
        if(Math.random() <= prob){
            ac = 1;
        } 

//this while return the selection (what the AI thinks will be played)
}

//display results
//console.log('he will play: '+guide[selection]);
return counter[guide[selection]];
}