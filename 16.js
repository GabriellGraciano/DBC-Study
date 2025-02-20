/*
    Escreva um programa que determine se uma letra fornecida pela pessoa usuária é uma vogal ou consoante.
*/

const letra = "a"

const vogal = "aeiou"
const vogalCaps = "AEIOU"

if (vogal.includes(letra) || vogalCaps.includes(letra)){
    console.log("Essa letra ",letra," e vogal")
}   else{
    console.log("esta letra ",letra,"e consoante")
}