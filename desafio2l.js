// 1. Variáveis de entrada
let nomeHeroi = "Thor";
let xpHeroi = 7500;
let nivel = "Radiante"; // Valor padrão caso não caia em nenhuma regra

// 2. Organizando as faixas em um Vetor de Objetos (Estruturalmente limpo)
const faixas = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" }
];

// 3. Substituindo o else if por um Laço de Repetição (for)
// Este é um dos objetivos do desafio
for (let i = 0; i < faixas.length; i++) {
    if (xpHeroi <= faixas[i].limite) {
        nivel = faixas[i].nome;
        break; // Encontrou o nível? Para de procurar!
    }
}

// 4. Saída
console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${nivel}**`);