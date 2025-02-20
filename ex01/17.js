/*
    Escreva um programa que leia valores médios de preços de um modelo de carro por 3 anos 
    consecutivos e exiba o valor mais alto e mais baixo entre esses três anos.
*/

const carro1 = 70000
const carro2 = 68000
const carro3 = 85000

console.log("Valor do chevete1: ",carro1)
console.log("Valor do chevete2: ",carro2) //detalhe eu nn sei os precos dos carro ta? isso sao precos *hipoteticos* KKKKKKKKKKK
console.log("Valor do chevete3: ",carro3)

var media = (carro1 + carro2 + carro3) / 3

if(carro1 > media && carro1 > carro2 && carro1 > carro3){
    console.log("O Chevete1 que custa :",carro1,"esta acima da media de: ", media)
}   else if(carro2 > media && carro2 > carro1 && carro2 > carro3){
    console.log("O Chevete2 que custa :",carro2,"esta acima da media de: ", media)  // aqui eu to comparando o preco dos carros com a media e com o resto dos carro
}   else if(carro3 > media && carro3 > carro1 && carro3 > carro2){
    console.log("O Chevete3 que custa :",carro3,"esta acima da media de: ", media)
}

if(carro1 < media && carro1 < carro2 && carro1 < carro3){
    console.log("O Chevete1 que custa :",carro1,"esta abaixo da media de: ", media)
}   else if(carro2 < media && carro2 < carro1 && carro2 < carro3){
    console.log("O Chevete2 que custa :",carro2,"esta abaixo da media de: ", media) // mesma coisa aqui
}   else if(carro3 < media && carro3 < carro1 && carro3 < carro2){
    console.log("O Chevete3 que custa :",carro3,"esta abaixo da media de: ", media)
}