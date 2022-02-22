let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) { 
        return true
    } else {
        return false
    }
}
   
function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    }

    function finalizar() {
        if(valores.length == 0){
            window.alert('adicione valores a tes de finalizar!')
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores){
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados</p><br>.`
            res.innerHTML += `<p> O maior valor informado foi ${maior}</p><br>`
            res.innerHTML += `<p> </p>O menor valor informado foi ${menor}</p><br>`
            res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p><br>`
            res.innerHTML += `A média dos valores digitados é ${media}.</p><br>`
        }
    }
 
