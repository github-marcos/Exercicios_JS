function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length === 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados preenchidos.')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homen'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menino.jpeg')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/adolescente.jpeg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'imagens/Homen.jpeg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpeg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','imagens/menina.jpg')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src','imagens/jovem.jpeg')
            }else if(idade <50){
                //adulto
                img.setAttribute('src','imagens/mulher.jpeg')
            }else {
                //idoso
                img.setAttribute('src','imagens/idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

