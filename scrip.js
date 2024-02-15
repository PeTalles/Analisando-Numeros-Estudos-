var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function nnum(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function llista(n, l){
    if(l.indexOf(Number(n))!=-1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(nnum(num.value) && ! llista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '
    }else{
        window.alert("ERRO!")
    }
    num.value = ''
    num.focus()


}
function finalizar(){
    if(valores.length==0){
        window.alert('Digite um valor valido !')
    }else{
        var tol = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for(var pos in valores){
            soma+=valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos < menor])
            menor = valores[pos]
        }
        media = soma/tol
        res.innerHTML=''
        res.innerHTML +=`<p> Ao todo temos ${tol} números cadastrados. `
        res.innerHTML +=`<p> O maior numero informado é ${maior} . `
        res.innerHTML +=`<p> O menor número informado é ${menor}. `
        res.innerHTML +=`<p> A soma do valores é ${soma}. `
        res.innerHTML +=`<p> A media dos valores é ${media}. `
    }
}