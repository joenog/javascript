let num = [5,6,3,8,4,9]

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições!`)

console.log(num[5])

for(let pos= 0; pos < num.length; pos++) { /*enqnto POS for menor que o tamanho do vetor NUM, icremente +1 no POS*/
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {  /* para cada posição dentro de NUM, motrarei o NUM[pos] posição do num */ 
    console.log(num[pos])
}
console.log(`A posição/index do 6 é: ${num.indexOf(6)}`)

/*valor que não exita na variavel  > -1 */
console.log(num.indexOf(55))
