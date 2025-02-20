/*
    Crie um código que solicita 3 notas de um estudante e imprima a média das notas e retorne se está Aprovado ou Reprovado. Média maior igual a 7.
*/

const media1 = 7
const media2 = 8
const media3 = 6

var mediaGeral = (media1 + media2 + media3) / 3

if (mediaGeral >= 7){
    console.log("O aluno foi aprovado com a nota de: ", mediaGeral)
}   else{
    console.log("O aluno foi reprovado com a media de: ",mediaGeral)
}