function contou () {
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pas = document.querySelector('#txtp')
    var res = document.querySelector("#res")

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        res.innerHTML = '<strong>Impossível Contar</strong>'
        /* ALERTA DE ERRO */
    } else {
        res.innerHTML = 'Contando: <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if (p <= 0) {
            /* ALERTA INVALIDO */
            alert('Impossível contar, CONSIDERANDO PASSO 1 ...')
            p = 1
        }

        if (i < f) {
            /* CONTAGEM RESCENTE */
            for(c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            /* CONTAGEM DESCRESCENTE */
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}