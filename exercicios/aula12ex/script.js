function vai() {

    var msg = document.getElementById('msg')
    var imagem = document.getElementById('photo')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    
    if (hora >= 0 && hora < 12){
        imagem.src="images/manha.png"
        document.body.style.background = '#62b4f4'
    
    }else if (hora >= 12 && hora <= 18){
        imagem.src="images/tarde.png"
        document.body.style.background = '#f9b682'
        
    
    }else{
        imagem.src="images/noite.png"
        document.body.style.background = '#1e72b0'
    }
    
    
    }
     