alert('O Horário condiz com o do seu PC')

function carregar() {
    var msg = window.document.getElementById('msg')
    var fto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom dia
        fto.src = 'imagens/manhã.jpg'
        document.body.style.background = '#ffff00'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        fto.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ff4500'
    }else {
        // Boa noite
        fto.src = 'imagens/noite.jpg'
        document.body.style.background = '#050535'
    }
}


