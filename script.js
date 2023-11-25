let user;
let computer = getComputerChoice();
let score_user = 0;
let score_computer = 0;

function getComputerChoice() {
    let list = ["piedra","papel","tijeras"];
    let randomChoice = list[Math.floor(Math.random() * list.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "piedra" && computerSelection === "piedra") {
        console.log("Empate");
    } else if (playerSelection === "piedra" && computerSelection === "papel") {
        console.log("Gana la computadora");
        score_computer++;
    } else if (playerSelection === "piedra" && computerSelection === "tijeras") {
        console.log("Gana el usuario");
        score_user++;
    } else if (playerSelection === "papel" && computerSelection === "papel") {
        console.log("Empate");
    } else if (playerSelection === "papel" && computerSelection === "piedra") {
        console.log("Gana el usuario");
        score_user++;
    } else if (playerSelection === "papel" && computerSelection === "tijeras") {
        console.log("Gana la computadora");
        score_computer++;
    } else if (playerSelection === "tijeras" && computerSelection === "tijeras") {
        console.log("Empate");
    } else if (playerSelection === "tijeras" && computerSelection === "papel") {
        console.log("Gana usuario");
        score_user++;
    } else if (playerSelection === "tijeras" && computerSelection === "piedra") {
        console.log("Gana la computadora");
        score_computer++;
    } 
}

function game() {
    let games = 0;
    while (games < 5) {
        user = prompt();
        computer = getComputerChoice();
        console.log("El usuario uso " + user);
        console.log("La computadora uso " + computer);
        games++;
        playRound(user,computer);
        console.log("Puntos del usuario " + score_user);
        console.log("") /* Separador */
        if (score_user > score_computer && games === 5) {
            console.log("El usuario es el ganador, gana el usuario");
        } else if (score_user < score_computer && games === 5) {
            console.log("El usuario es el perdedor,  gana la computadora");
        } 
    }
}

game();
