function vai() {
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        alert('DIGITE UM NUMERO !')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ``
        while (c <= 10) {
           var item = document.createElement('option')  /* ciado elemento do tipo option, pro HTML */
           item.text = `${n} x ${c} = ${n*c}` 
           item.value = `tab${c}`
           tab.appendChild(item)
           c++
        }
    }
}