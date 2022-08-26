function vai() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'images/bebeho.png')
                //CRIANÇA
            } else if (idade < 21) {
                img.setAttribute('src', 'images/adoleho.png')
                //ADOLE
            } else if (idade < 31) {
                img.setAttribute('src', 'images/jovemho.png')
                //JOVEM
            } else if (idade < 51) {
                img.setAttribute('src', 'images/senhor.png')
                //ADULTO
            } else {
                img.setAttribute('src', 'images/idoso.png')
                //IDOSO
            }

        } else { //fex[1].checked - mulher
            gen = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'images/bebemu.png')
                //CRIANÇA
            } else if (idade < 21) {
                img.setAttribute('src', 'images/adolemu.png')
                //ADOLE
            } else if (idade < 31) {
                img.setAttribute('src', 'images/jovemmu.png')
                //JOVEM
            } else if (idade < 51) {
                img.setAttribute('src','images/senhora.png')
                //ADULTO
            } else {
                img.setAttribute('src','images/idosa.png')
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${gen} de ${idade} anos</strong>`
        res.appendChild(img)
    }
}