var numeros = [1,3,4,5,6];
console.log(numeros[0]);

for (var pos = 0 ; pos < numeros.length; pos++) {
    console.log("Posição: " + numeros + " Valor: " + [pos]);
}

var cafe = [];
cafe[0] = "Leite";
cafe[1] = "Capuccino";

var chocolate = new Array("Vanilla", "Moaccaino");

// Calular a média de todos os números de um array

var valores = [];
var soma = 0;
for ( var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length

console.log(media);

var arr2 = [1,2,3,4,5,6,7];

arr2.splice(2,3);
console.log(arr2)

var nomes = ["maria","João","Lucas","Pedro"];
var novos = nomes.splice(1,1,"Luiz");
console.log(novos)