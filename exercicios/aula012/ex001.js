var idade = 19
console.log(`Você tem ${idade} anos,`)
if (idade < 16) {
    console.log('Não vota!')
} else if (idade >= 16 && idade < 18 || idade > 65) {   //se a idade não é menor que 16 obviamente é maior q 16//
        console.log('Voto opcional!')
    } else if (idade >= 18) {                  // não execultado os comando enteriores obviamente a idade será >=18
        console.log('Voto obrigatório!')       // logo esse "if (idade >= 18)" é desnecessário
    }