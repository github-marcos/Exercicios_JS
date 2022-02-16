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
    if(l.indexOf(Number(n)) != -1 ) {
        return true
    }else {
        return false
    }
}
   
function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
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

            res.innerHTML = ''
            res.innerHTML += ` Ao todo, temos ${tot} números cadastrados.`
        }
    }
 
