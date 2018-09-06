'use strict';
window.onload = pontuacao;

function pontuacao(){
    var pont = localStorage.getItem('pontuaçao');
    document.getElementById("pontuacao").innerHTML = "SCORE: "+pont;
}
