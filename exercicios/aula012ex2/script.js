function vai() {
    var data = new Date()
    var ano = data.getFullYear()  //chamada pro ano atual, com 4 digitos

    var fano = document.querySelector('#txtano')  //chamada do ano digitado no HTML
    var res = document.querySelector('#res')  //chamada do cod. de resultado no HTML

    if (fano.value == 0 || fano.value > ano) {  //condiçç de erro caso ano seja inválido
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')  //chamada da escolha do sexo no HTML
        var idade = ano - Number(fano.value)   //calculo feito à partir do ano digitado no HTML
        var gen = ''  // var para mostrar 
        var img = document.createElement('img')  // IMG criado dinamicamente no JS para incluir imagens
        img.setAttribute('id', 'foto') //aqui foi adicionado im ID ao IMG criado acima
        // o IMG criado acima poderia ser criado no HTML e atribuido ao JS

        if (fsex[0].checked) {  //condiçç caso genero escolhido for MASC
            gen = 'Homem'
            if (idade >=0 && idade < 10) {  //condição para caso for criaça mostrar determinada imagem...
                img.setAttribute('src', 'images/bebeho.png')
                //CRIANÇA             -- aqui usada a tag IMG criada noJS incluido imagens duma pasta local
            } else if (idade < 21) {
                img.setAttribute('src', 'images/adoleho.png')
                //ADOLE
            } else if (idade < 35) {
                img.setAttribute('src', 'images/jovemho.png')
                //JOVEM
            } else if (idade < 51) {
                img.setAttribute('src', 'images/senhor.png')
                //ADULTO
            } else {
                img.setAttribute('src', 'images/idoso.png')
                //IDOSO
            }

        } else { //fex[1].checked - mulher    -  Condiç caso genero escolhido no HTML for FEMININO
            gen = 'Mulher'
            if (idade >=0 && idade < 10) { //condiç caso for menina mostrar determinaa imagem
                img.setAttribute('src', 'images/bebemu.png')
                //CRIANÇA             -- aqui usada a tag IMG criada noJS incluido imagens duma pasta local
            } else if (idade < 21) {
                img.setAttribute('src', 'images/adolemu.png')
                //ADOLE
            } else if (idade < 35) {
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
        res.style.textAlign = 'center'  //Comando para centrarlixar resultado do programa
        res.innerHTML = `<strong>Detectamos ${gen} de ${idade} anos</strong>` //Comando resultado
        res.appendChild(img) // comando para mostrar abaixo a tag IMG criado no JS
    }
}