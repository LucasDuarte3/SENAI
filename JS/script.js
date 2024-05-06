function replace(){
    var frase = "ola mundo"

    var respostas = document.getElementById("resposta")
    respostas.innerHTML = frase

    var fraseModificada = frase.replaceAll("mundo", "lucas")
    respostas.innerHTML = fraseModificada
}

function pesquisar(){
    var filmes = ["Vingadores", "Pokemon", "Batman", "Coringa"]
    var pesquisar = filmes.includes("Pokemon")

    var respostas2 = document.getElementById("resposta2")
    if(pesquisar == true){
        respostas2.innerHTML = `opa o termo foi encontrado`
    }
    else{
        respostas2.innerHTML = `nao foi encontrado`
    }

    var respostas3 = document.getElementById("resposta3")
    var pesquisar2 = filmes.indexOf("Pokemon")

    respostas3.innerHTML = pesquisar2

    if(pesquisar2 == 1){
        respostas3.innerHTML = `foi encontrado`
    }
    else{
        respostas3.innerHTML = `nao foi encontrado`
    }
}
function pad(){
    var nome = "lucas";
    var Sobrenome = "gomes";
    var resposta4 = document.getElementById("resposta4");

    resposta4.innerHTML = nome.padStart(12,Sobrenome)
    resposta4.innerHTML = nome.padEnd(10,Sobrenome)
}
function object(){

}
function Promises(){

}
replace()
pesquisar()
pad()
object()
Promises()