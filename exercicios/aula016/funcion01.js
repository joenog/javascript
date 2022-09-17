function parimpar(n) {
    if (n % 2 == 0) {    //aqui tnho a acao que é o calculo, e abaixo o retorno
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
let res = parimpar(10) // aqui tenho a CHAMADA e o (10) é o parametro
console.log(res)