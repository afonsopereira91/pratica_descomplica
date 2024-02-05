const prompt = require('prompt-sync') ();
let cafe = "café";
let leite = "leite";
let cha = "chá";

const escolhaBebida = prompt('Escolha uma bebida (café, leite ou chá):');
let valor = escolhaBebida

switch (valor){
    case "cafe":
        console.log("Ok! o café custa R1,50")
        break;
    case "leite":
        console.log("Ok o leite custa R$ 2,50");
        break;
    case "chá":
        console.log("Ok o chá custa R$2,00");
        break;
    default:
        console.log("Escolha inválida, Por favor escolha entre café, leite e chá")
    }
