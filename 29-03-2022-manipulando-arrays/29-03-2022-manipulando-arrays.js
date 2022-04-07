"use strict";
// método map
var numeros = [9, 25, 36];
var raizes = numeros.map(Math.sqrt);
console.log("Raízes : " + raizes);
var dobro = numeros.map(function (numeros) {
    return numeros * 2;
});
console.log("Dobro : " + dobro);
// método filter
function maiorQue(valor) {
    return valor >= 10;
}
var filtroNumeros = [6, 7, 9, 10, 12, 17].filter(maiorQue);
console.log("Filtro numeros menor que 10 : " + filtroNumeros);
function quantidadeDe(valor) {
    return valor.length <= 9;
}
var filtroStrings = ["Luiz", " Schweinsteiger", " Hakan", " Messi"].filter(quantidadeDe);
console.log("Filtro string nome com menos de 10 letras : " + "[" + filtroStrings + "]");
// método find
// este método retorna o primeiro elemento do array que satisfazer a condição
const findNumeros = [5, 12, 8, 22, 144];
const found = findNumeros.find((elemento) => elemento > 10);
console.log("Array com números para o método find, a condição true é o primeiro número acima de 10 " +
    "[" +
    findNumeros +
    "]");
console.log("Método find: " + "[" + found + "]");
const findFrutas = [
    { nome: "maçã", quantidadeDe: 2 },
    { nome: "banana", quantidade: 0 },
    { nome: "cereja", quantidade: 5 },
];
const eBanana = findFrutas.find((frutas) => frutas.nome === "banana");
console.log(eBanana);
// método fill
// preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático
const fillM = [1, 2, 3];
fillM.fill(4, 2);
console.log(fillM);
// método push
var numeros = [1, 2, 3];
console.log('Array antes do método push : ' + '[' + numeros + ']');
numeros.push(4);
console.log('Array depois do método push : ' + '[' + numeros + ']');
// método pop
var marcasDeChuteiras = ['Nike', 'Adidas', 'Puma'];
var marcasDeChuteirasPop = marcasDeChuteiras.pop();
console.log('Marca removida usando o método pop : ' + marcasDeChuteirasPop);
console.log(marcasDeChuteiras);
// o método pop remove o último item do array e retorna o valor
