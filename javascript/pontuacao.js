'use strict';
window.onload = pontuacao;
var t = 0;
var j = 0;
var r = 0;
var r = 0;
var modo = localStorage.getItem('modo')
function pontuacao(){
    var pont = localStorage.getItem('pontuaçao');
    for(var i=1;i<11;i++){
        if(j===0){
        if (pont>document.getElementById("pontuacao"+i).innerHTML){
        document.getElementById("pontuacao"+i).innerHTML = pont;
        localStorage.setItem('pontuacao'+i,pont);
        var novo = document.getElementById("pontuacao"+i).innerHTML;
        t =i;
        j++;}
            }
        }}

