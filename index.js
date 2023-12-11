var SetaDireita = window.document.getElementById("seta-direita")
var dep1 = window.document.getElementById("dep1")
var dep2 = window.document.getElementById("dep2")
var dep3 = window.document.getElementById("dep3")
var SetaESquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita(){
    dep1.style ="display:none"
    dep3.style ="display:flex"
    SetaESquerda.style = "display:flex"
    SetaDireita.style = "display:none"

}

function RolarParaEsquerda() {
    dep3.style ="display:none"
    dep1.style ="display:flex"
    SetaESquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}