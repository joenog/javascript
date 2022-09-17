function soma(n1=0, n2=0) {   /* adiciono o =0 caso o numero real posterior não seja requerido */
    return n1 + n2
}              //numero real
console.log(soma(10, 5))  /* caso seja requerido apenas um valor ele será somado com 0 citado acima */

//--------------

function soma(n1=0, n2=0,) {
    return n1 + n2
}

var res = soma(2, 5)
console.log(res)