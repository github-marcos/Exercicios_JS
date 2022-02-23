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
            window.alert('adicione valores antes de finalizar!')
        }else{
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores){
                soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<h3> Ao todo, temos <mark>${tot}</mark> números cadastrados</h3>`
            res.innerHTML += `<h3> O maior valor informado foi <mark>${maior}</mark></h3>`
            res.innerHTML += `<h3> O menor valor informado foi <mark>${menor}</mark></h3>`
            res.innerHTML += `<h3> Somando todos os valores, temos<mark> ${soma}</mark></h3>`
            res.innerHTML += `<h3> A média dos valores digitados é <mark>${media}</mark></h3><br>`
        }
    }
 
