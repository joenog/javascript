let num = [5, 8, 2]
console.log(`Nosso vetor é o ${num}`)

num[3] = 6    /* adicionando um indice [3] + valor = 6 /(ou substitui indice já existente) */
console.log(`Agora nosso vetor é ${num}`)

num.push(7)  /* o push adiciona o valor criando sempre um novo indice [4]  */
console.log(`Agora nosso vetor é ${num}`)

/* Para sabe o comprimentdo de um vetor(quantidade de indices  num.length) */
console.log(`meu vetor tem ${num.length} posições`)

/* mostrando posição de forma isolada */
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num[1])  /* o segundo valor é 8 */

/* metodo sort()  */
num.sort() /* colocará  os valores em oordem crescente   [2,5,6,7,8]*/