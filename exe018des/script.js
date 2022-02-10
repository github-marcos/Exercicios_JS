
function carregar(){

var n = Number(document.getElementById('d1').value)
var n2 = Number(document.getElementById('d2').value)
var n3 = Number(document.getElementById('d3').value)
var res = document.getElementById('res')

        if(n == 0 || n2 == 0 || n3 == 0){
            window.alert('Preencha todos os campos.')
        }else{
            res.innerHTML = 'Contando: <br>'
            //contagem crescente
            if(n <= n3){
            for(var c= n; c < n2; c += n3){
            res.innerHTML +=`${c} \u{1f449} `
            }
            res.innerHTML += `${c} \u{1F3C1} `
            //contagem decrescente
            }else{
        for( var c = n; c > n2; c -= n3) {   
            res.innerHTML +=`${c} \u{1f449} `
        }
        res.innerHTML += `${c} \u{1F3C1} `
           }  
            
        }
}

