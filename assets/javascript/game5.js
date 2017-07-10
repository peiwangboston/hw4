//VARIABLES Define global variables and set defaults
var recRanNumRed = Math.floor(Math.random() * 12 + 1);
var recRanNumBlue = Math.floor(Math.random() * 12 + 1);
var recRanNumYellow = Math.floor(Math.random() * 12 + 1);
var recRanNumGreen = Math.floor(Math.random() * 12 + 1);
var addArray = [];
var sum = 0;
var bigNumber = Math.floor((Math.random() * (120 - 1)) + 19);
var wins = 0;
var losses = 0;




$(document).ready(function() {

    setBigNumber();

    // THIS CALLS THE FUNCTIONS
    $('#red').on('click', genRanNumRed);
    $('#blue').on('click', genRanNumBlue);
    $('#yellow').on('click', genRanNumYellow);
    $('#green').on('click', genRanNumGreen);
});

function setBigNumber() {
    $('#demo').html(bigNumber);
}

// THIS IS THE RED GEM
function genRanNumRed() {
    addArray.push(recRanNumRed);
    sum = sum + recRanNumRed;
    updateTotalDiv();
    displayArray();
    testIfLimitExceeded();
}

// THIS IS THE BLUE GEM
function genRanNumBlue() {
    addArray.push(recRanNumBlue);
    sum = sum + recRanNumBlue;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

// THIS IS THE YELLOW GEM
function genRanNumYellow() {
    addArray.push(recRanNumYellow);
    sum = sum + recRanNumYellow;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

// THIS IS THE GREEN GEM
function genRanNumGreen() {
    addArray.push(recRanNumGreen);
    sum = sum + recRanNumGreen;
    displayArray();
    updateTotalDiv();
    testIfLimitExceeded();
}

function displayArray() {
    console.dir(addArray);
}

function updateTotalDiv() {
    document.getElementById("scoreTotal").innerHTML = sum;
}

function resetGame() {
    recRanNumRed = Math.floor(Math.random() * 12 + 1);
    recRanNumBlue = Math.floor(Math.random() * 12 + 1);
    recRanNumYellow = Math.floor(Math.random() * 12 + 1);
    recRanNumGreen = Math.floor(Math.random() * 12 + 1);
    addArray = [];
    sum = 0;
    bigNumber = Math.floor((Math.random() * (120 - 1)) + 19);
}

function testIfLimitExceeded() {
    if (sum > bigNumber) {
        console.log("You lose!");
        losses++;
        $("#losses").html(losses);
        resetGame();
        updateTotalDiv();
        setBigNumber();
    } else if (sum === bigNumber) {
        console.log("You WIN!");
        wins++;
        $("#wins").html(wins);
        resetGame();
        updateTotalDiv();
        setBigNumber();
    }
}
