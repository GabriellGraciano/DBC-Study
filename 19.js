/*
    Escreva um programa que exiba o turno que a pessoa estuda ("manhã", "tarde" ou "noite")
    e exiba a mensagem "Bom Dia!", "Boa Tarde!", "Boa Noite!", ou "Valor Inválido!", conforme o caso.

*/

const pessoa1 = "Noite"
const pessoa2 = "Manha"
const pessoa3 = "Tarde"
const pessoa4 = "pessoa confusa (mulher)"

if (pessoa1 == "Noite"){
    console.log("Boa Noite!")
}
if (pessoa2 == "Manha"){
    console.log("Bom Dia!")
}
if (pessoa3 == "Tarde"){
    console.log("Boa tarde!")
}
if(pessoa4 == "pessoa confusa (mulher)"){
    console.log("Valor invalido.")
}