function vai() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#fot')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    msg.innerHTML = `${hora} : ${min}`
    msg.style.padding = '10px'

    if (hora < 12) {
        img.src = 'images/manha.png'
        document.body.style.background = 'red'
    } else if (hora < 18) {
        img.src = 'images/tarde.png'
        document.body.style.background = 'blue'
    } else {
        img.src = 'images/noite.png'
        document.body.style.background = 'black'
    }
}