// PRATICANDO CODIGOS ANTERIORES

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)  // uma função chamando a si mesma
    }
}

var res = fatorial(3)
console.log(res)