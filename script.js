// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

// # DOM

// Para guardar em varáveis os dados do
// documento

// Campos

var adultos = document.querySelector("#adultos");
var criancas = document.querySelector("#criancas");
var churrasco = document.querySelector("#churrasco");

// Botão

var btnCalcular = document.querySelector("button");

// Espaço da resposta

var resultado = document.querySelector(".resultado");

// # Events

btnCalcular.addEventListener("click", calcular);
document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        calcular();
    }
})

// # Funções

function calcular(){

    // # Variáveis

    var numAdultos = parseFloat(adultos.value);
    var numCriancas = parseFloat(criancas.value/2);
    var numTempo = parseFloat(churrasco.value);
    var pessoas = numAdultos + numCriancas
    var carne
    var cerveja
    var aguaRefri

    // Calculo a quantidade de comida e bebida individualmente
    if(numTempo > 6){
        carne = 650
        cerveja = 2000
        aguaRefri = 1500
    }
    else{
        carne = 400
        cerveja = 1200
        aguaRefri = 1000
    }

    // Calculo o consumo
    let consumoCarne = (carne * pessoas)/1000
    let consumoCerveja = (cerveja * pessoas)/1000
    let consumoAguaRefri = (aguaRefri * pessoas)/1000

    // Deixo o campo de input vazio
    adultos.value = ""
    criancas.value = ""
    churrasco.value = ""

    // Exibo a resposta na tela

    resultado.innerHTML = "<h3>É necessário:</h3><span>" + consumoCarne.toFixed(2) + "Kg de Carne </span><span>" + consumoCerveja.toFixed(2) + "L de Cerveja </span><span>" + consumoAguaRefri.toFixed(2) + "L de Água/Refrigerante </span>"

    save();
}

function save(){
    localStorage.setItem("resultado", resultado.innerHTML);
}

onload = function(){
    resultado.innerHTML = localStorage.getItem("resultado");
}