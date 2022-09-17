// JOGANDO FUNÇÃO DENTRO DE UMA VARIAVEL

var v = function (n1) {   /* é possivel colocar uma função dentro de variavel */
    return n1 * 2
}
console.log(v(5))  /* maramtro real que será enviado a função */

// ACIMA eu passei pra minha variavel um parametro e ele conseguiu executar uma funçao
//-------------------

let multip = function(n) {
    return n*2
}
console.log(multip(10))
