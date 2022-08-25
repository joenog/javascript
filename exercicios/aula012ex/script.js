var msg = document.querySelector('#msg')
var img = document.querySelector('#img')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `${hora} : ${min}`

if (hora >= 0 && hora < 12) {
    img.src = 'images/manha.png'
    document.body.style.background = '#62b4f4'

} else if (hora >= 12  && hora <= 18) {
    img.src = 'images/tarde.png'
    document.body.style.background = '#f9b682'

} else {
    img.src = 'images/noite.png'
    document.body.style.background = '#1e72b0'
}