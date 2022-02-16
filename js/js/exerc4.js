"use strict";

function insert(num){
    let numero = document.getElementById('res').value;
    document.getElementById("res").value = numero + num;
   
}

function limpar(){
    document.getElementById('res').value = "";
}

function apagar(){
    let numero = document.getElementById('res').value;
    document.getElementById('res').value = numero.substring(0, numero.length -1);
}

function calcular(){
    let numero = document.getElementById('res').value;
    if(numero){
        document.getElementById('res').value = eval(numero);
    }else{
        document.getElementById('res').value = "Vazio...";
    }
}

document.getElementById("raiz").addEventListener("click", function(){
    calculaRaiz()
});

function calculaRaiz(){
    let numero = Number(document.getElementById('res').value);
    let calcula = (Math.sqrt(numero))
    document.getElementById('res').value = calcula;
}

document.getElementById("potencia").addEventListener("click", function(){
    calculaPot();
});

function calculaPot(){
    let numero = Number(document.getElementById("res").value);
    let calcula = (Math.pow(numero, 2));
    document.getElementById('res').value = calcula;
}

document.getElementById('arredondar').addEventListener("click", function(){
    arredondar()
});

function arredondar(){
    let numero = parseFloat(document.getElementById('res').value);
    let arredonda = (Math.round(numero));
    document.getElementById("res").value = arredonda;
}