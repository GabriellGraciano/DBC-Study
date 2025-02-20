
//  Escreva um programa que peça um número à pessoa usuária e informe se ele é inteiro ou decimal.

num1 = 5
num2 = 5.5

if (Number.isInteger(num1)){    // number.isinteger serve pra ver se o numero e inteiro, eu pesquisei ent eu encontrei esse comando
                                // Dps me diz se poderia usar coisa complicada nos codigo de antes tmb
    console.log("O numero e inteiro.")
}   else{
    console.log("O numero e decimal.")
}

if (Number.isInteger(num2)){
    console.log("O numero e inteiro.")
}   else{
    console.log("O numero e decimal.")
}