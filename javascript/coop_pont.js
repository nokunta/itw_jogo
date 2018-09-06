'use strict';
window.onload = pontuacao;

function pontuacao(){
    var pont1 = localStorage.getItem('pont1');
    var pont2 = localStorage.getItem('pont2');
    document.getElementById("pontuacao").innerHTML = "SCORE: "+pont1+" e "+ pont2;
}
