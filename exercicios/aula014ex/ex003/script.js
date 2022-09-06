function vai() {
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')

    if (num.value.length == 0) { /*se a caixa tiver 0 caracteres */
        alert('Digite um numero!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ``

        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` /* funcionalidade para outras linguagems, indica item selecionado 1, 2, 3 */
            tab.appendChild(item)
        }
    }
}