function gerar(){
var g1 = Number(document.getElementById('d1').value)
var res = document.getElementById('res')

if (g1 == 0){
    window.alert('Escolha um número de 1 a 9')
}else{
    for(var c = 1 ; c <= 10; c++ )
   res.innerHTML += `${g1} x ${c}= ${g1 * c}<br>`  
    }

}
