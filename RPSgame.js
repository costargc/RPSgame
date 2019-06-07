let userScore = 0;
let drawScore = 0;
let computerScore = 0;
let round = 0;
let timeblink = 100;
let gameAll = [];

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: grabmykey(),
    authDomain: "rpsgame-2123e.firebaseapp.com",
    databaseURL: "https://rpsgame-2123e.firebaseio.com",
    projectId: "rpsgame-2123e",
    storageBucket: "rpsgame-2123e.appspot.com",
    messagingSenderId: "215483768093",
    appId: "1:215483768093:web:5ab5648a15754725"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var sessiondatabaseKey = generateUUID();

const AlluserScore_div = document.getElementById("Alluser-score");
const AlldrawScore_div = document.getElementById("Alldraw-score");
const AllcomputerScore_div = document.getElementById("Allcomputer-score");
const Allaction_div = document.getElementById("ALLaction-message");

grabdatabasedata();

const userScore_div = document.getElementById("user-score");
const drawScore_div = document.getElementById("draw-score");
const computerScore_div = document.getElementById("computer-score");

const userHand_src = document.getElementById("user-hand");
const computerHand_src = document.getElementById("computer-hand");

const round_div = document.getElementById("action-message");

//Dummy AI starts with a random selection
var game = Array.from({ length: 20 }, () => Math.floor(Math.random() * 3));
game.shift(); game.push(0);



$('#rock').on("click", function () {
    event.preventDefault();
    userHand_src.src = "images/transparent.png";
    computerHand_src.src = "images/transparent.png";

    setTimeout(function () {
        grabdatabasedata();
        userHand_src.src = "images/rock.png";
        AIchoose = AIselection(game);
        computerHand_src.src = "images/AI" + AIchoose + ".png";
        game.shift(); game.push(0); //Adds a rock for the kicks of it (psichology says that rock is the most commom)

        if (AIchoose == "rock") { drawScore++; glowMe("draws"); AlldrawScore++; }
        else if (AIchoose == "paper") { computerScore++; glowMe("losses"); AllcomputerScore++; }
        else { userScore++; glowMe("wins"); AlluserScore++; }

        drawScore_div.innerHTML = drawScore;
        computerScore_div.innerHTML = computerScore;
        userScore_div.innerHTML = userScore;

        AlluserScore_div.innerHTML = AlluserScore;
        AlldrawScore_div.innerHTML = AlldrawScore;
        AllcomputerScore_div.innerHTML = AllcomputerScore;

        round++;
        Allrounds++;
        round_div.innerHTML = "Session Rounds: " + round;
        Allaction_div.innerHTML = "All Rounds Played: " + Allrounds;

        Allrocks++;

        updateDatabase("rock");

    }, timeblink);



});

$('#paper').on("click", function () {
    event.preventDefault();
    userHand_src.src = "images/transparent.png";
    computerHand_src.src = "images/transparent.png";

    setTimeout(function () {
        grabdatabasedata();
        //console.log("clicked paper");
        userHand_src.src = "images/paper.png";
        AIchoose = AIselection(game);
        computerHand_src.src = "images/AI" + AIchoose + ".png";
        game.shift(); game.push(1);

        if (AIchoose == "paper") { drawScore++; glowMe("draws"); AlldrawScore++; }
        else if (AIchoose == "scissors") { computerScore++; glowMe("losses"); AllcomputerScore++; }
        else { userScore++; glowMe("wins"); AlluserScore++; }

        drawScore_div.innerHTML = drawScore;
        computerScore_div.innerHTML = computerScore;
        userScore_div.innerHTML = userScore;

        AlluserScore_div.innerHTML = AlluserScore;
        AlldrawScore_div.innerHTML = AlldrawScore;
        AllcomputerScore_div.innerHTML = AllcomputerScore;

        round++;
        Allrounds++;
        round_div.innerHTML = "Session Rounds: " + round;
        Allaction_div.innerHTML = "All Rounds Played: " + Allrounds;

        Allpapers++;
        updateDatabase("paper");

    }, timeblink);



})

$('#scissors').on("click", function () {
    grabdatabasedata();
    event.preventDefault();
    userHand_src.src = "images/transparent.png";
    computerHand_src.src = "images/transparent.png";

    setTimeout(function () {
        //console.log("clicked scissors");
        userHand_src.src = "images/scissors.png";
        AIchoose = AIselection(game);
        computerHand_src.src = "images/AI" + AIchoose + ".png";
        game.shift(); game.push(2);

        if (AIchoose == "scissors") { drawScore++; glowMe("draws"); AlldrawScore++; }
        else if (AIchoose == "rock") { computerScore++; glowMe("losses"); AllcomputerScore++; }
        else { userScore++; glowMe("wins"); AlluserScore++; }

        drawScore_div.innerHTML = drawScore;
        computerScore_div.innerHTML = computerScore;
        userScore_div.innerHTML = userScore;

        AlluserScore_div.innerHTML = AlluserScore;
        AlldrawScore_div.innerHTML = AlldrawScore;
        AllcomputerScore_div.innerHTML = AllcomputerScore;

        round++;
        Allrounds++;
        round_div.innerHTML = "Session Rounds: " + round;
        Allaction_div.innerHTML = "All Rounds Played: " + Allrounds;

        Allscissors++;
        updateDatabase("scissors");

    }, timeblink);



})

function updateDatabase(value) {

    gameAll.push(value);

    database.ref().child(sessiondatabaseKey).set({
        userScore: userScore,
        drawScore: drawScore,
        computerScore: computerScore,
        round: round,
        game: game,
        gameAll: gameAll
    });


    database.ref().child("maingame").set({
        AlluserScore: AlluserScore,
        AlldrawScore: AlldrawScore,
        AllcomputerScore: AllcomputerScore,
        Allrounds: Allrounds,
        Allrocks: Allrocks,
        Allpapers: Allpapers,
        Allscissors: Allscissors,
    });


}


function glowMe(status) {
    if (status == "wins") {
        document.getElementById("user-selection").setAttribute("id", "user-selection_glow");
        setTimeout(function () {
            document.getElementById("user-selection_glow").setAttribute("id", "user-selection");
        }, timeblink);
    }
    else if (status == "losses") {
        document.getElementById("computer-selection").setAttribute("id", "computer-selection_glow");
        setTimeout(function () {
            document.getElementById("computer-selection_glow").setAttribute("id", "computer-selection");
        }, timeblink);
    }
    else {
        document.getElementById("user-selection").setAttribute("id", "user-selection_glowD");
        document.getElementById("computer-selection").setAttribute("id", "computer-selection_glowD");
        setTimeout(function () {
            document.getElementById("user-selection_glowD").setAttribute("id", "user-selection");
            document.getElementById("computer-selection_glowD").setAttribute("id", "computer-selection");
        }, timeblink);
    }
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


function AIselection(game) {

    guide = { 0: 'rock', 1: 'paper', 2: 'scissors' }
    counter = { rock: 'paper', paper: 'scissors', scissors: 'rock' }

    //Define all zero 3rd lvl Markov Matrix
    var MarkovMatrix3D = Array(
        Array(Array(0, 0, 0), Array(0, 0, 0), Array(0, 0, 0)),
        Array(Array(0, 0, 0), Array(0, 0, 0), Array(0, 0, 0)),
        Array(Array(0, 0, 0), Array(0, 0, 0), Array(0, 0, 0)),
    )

    //Super elegant way to count and produce the markov matrix
    for (let n = 0; n < game.length - 2; n++) {
        MarkovMatrix3D[game[n]][game[n + 1]][game[n + 2]] += 1;
    }

    //Choose based on the MarkovMatrix what is the most likely next play.
    ac = 0;
    while (ac == 0) {
        //select random from 0 <= x <= 2 (R,P,S)
        selection = Math.floor(Math.random() * 3);


        //calculate prob
        base = MarkovMatrix3D[game[game.length - 2]][game[game.length - 1]][0] +
            MarkovMatrix3D[game[game.length - 2]][game[game.length - 1]][1] +
            MarkovMatrix3D[game[game.length - 2]][game[game.length - 1]][2];

        if (base == 0) {
            prob = 1 / 3;
        }
        else {
            prob = MarkovMatrix3D[game[game.length - 2]][game[game.length - 1]][selection] / base;
        }

        //activation probability
        if (Math.random() <= prob) {
            ac = 1;
        }

        //this while return the selection (what the AI thinks will be played)
    }

    //display results
    //console.log('he will play: '+guide[selection]);
    return counter[guide[selection]];
}


function grabmykey() {
    p1 = "KSzaCyL4GH";
    p2 = "8vwgEs4KWITArwnb52MXl1wuBUUA";

    p1 = encrypt(p1, -10);
    p2 = encrypt(p2, -10);

    return p1 + "-" + p2

};

function encrypt(msg, key) {
    var encMsg = "";

    for (var i = 0; i < msg.length; i++) {
        var code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1) {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
}

function mod(n, p) {
    if (n < 0)
        n = p - Math.abs(n) % p;

    return n % p;
}


function grabdatabasedata(){
    database.ref().child("maingame").on("value", function (snapshot) {
    
        AlluserScore = 0;
        AlldrawScore = 0;
        AllcomputerScore = 0;
        Allrounds = 0;
        Allrocks = 0;
        Allpapers = 0;
        Allscissors = 0;
    
        AlluserScore = snapshot.val()['AlluserScore'];
        AlldrawScore = snapshot.val()['AlldrawScore'];
        AllcomputerScore = snapshot.val()['AllcomputerScore'];
        Allrounds = snapshot.val()['Allrounds'];
        Allrocks = snapshot.val()['Allrocks'];
        Allpapers = snapshot.val()['Allpapers'];
        Allscissors = snapshot.val()['Allscissors'];
    
        AlluserScore_div.innerHTML = AlluserScore;
        AlldrawScore_div.innerHTML = AlldrawScore;
        AllcomputerScore_div.innerHTML = AllcomputerScore;
    
        Allaction_div.innerHTML = "All Rounds Played: " + Allrounds;
    
    });
    }