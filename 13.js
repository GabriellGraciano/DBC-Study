/*
    Crie um código que calcule e imprima a média ponderada dos números 5, 12, 20 e 15 com pesos respectivamente iguais a 1, 2, 3 e 4.
*/

const num1 = 5
const num2 = 12
const num3 = 20
const num4 = 15

const peso1 = 1
const peso2 = 2
const peso3 = 3
const peso4 = 4

var calculoPeso = peso1 + peso2 + peso3 + peso4

var mediaPonderada = ((num1 * 1) + (num2 * 2) + (num3 * 3) + (num4 * 4)) / calculoPeso

console.log(mediaPonderada)