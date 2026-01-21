// 1. Variáveis (conforme solicitado)
let nomeHeroi = "Thor"; 
let xpHeroi = 7500;
let nivelHeroi = "";

// 2. Operadores
if ( xpHeroi < 1000 ) {
    nivelHeroi = "Ferro!";
} else if ( xpHeroi >= 1001 && xpHeroi <= 2000 ) {
    nivelHeroi = "Bronze!";
} else if ( xpHeroi >= 2001 && xpHeroi <= 5000 ) {
    nivelHeroi = "Prata!";   
} else if ( xpHeroi >= 5001 && xpHeroi <= 7000 ) {
    nivelHeroi = "Ouro!";
} else if ( xpHeroi >= 7001 && xpHeroi <= 8000 ) {
    nivelHeroi = "Platina!";
} else if ( xpHeroi >= 8001 && xpHeroi <= 9000 ) {
    nivelHeroi = "Ascedente!";
} else if ( xpHeroi >= 9001 && xpHeroi <= 10000 ) {
    nivelHeroi = "Imortal!"
} else {
    nivelHeroi = "Radiante!"
}

// saída do script #1
console.log(`O Herói de nome ${nomeHeroi}, com a experiência de ${xpHeroi}, está do ${nivelHeroi}!!`)