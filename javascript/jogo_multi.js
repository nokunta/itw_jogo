'use strict';
var numerosIguais = 0;
var q = 0;
var l = 1;
var r = 1;
var cs = [localStorage.getItem('cs')];

var ch = localStorage.getItem('cs');
var cd = [];
var co = 1;
var u = 0;
var t =0;
var jogo = function playRound(adivinha) {
    if(co===1){
    for(var i =0;i<ch.length;i++){
    if(ch.substring(i,i+1) != ","){
        cd.push(parseInt(ch.substring(i,i+1)))
        t++;
        co++;
    }
    }
    }
    numerosIguais = 0;
    var z = 0;
    var x = 0;
    if (u < 10) {
        console.log(adivinha);
        var t, p = 0;
        for (var i = 0;i < cd.length;i++){
            if(cd[i]===adivinha[i]){
                numerosIguais++;
            }
        if(numerosIguais===4){
            console.log("entrei");
            window.alert(gameover(), _parent);
            location.reload();
    }
        else if(numerosIguais!=4){
            var z=0;
            var x=0;
            for(var j=0;j<cd.length;j++){
                for(var p=0;p<adivinha.length;p++){
                    if(cd[p]===adivinha[j]){
                        if(j===p){
                            z++;
                        }
                        else if(j!=p){
                            if(z===p || x>1){
                                console.log(x+"menos");
                                x=x-2;
                            }
                            console.log("mais"+x)
                            x++;
                        }
                    }}}
        console.log(cs);
        console.log(numerosIguais)
        console.log(x+"branca");
        console.log(z+"preta");
        }
            var branco = document.getElementById("branco").innerHTML;
        if(x===1){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML;}
        else if(x===2){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML;}
        else if(x===3){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML;}
        else if(x===4){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML;}
        var preto = document.getElementById("preto").innerHTML;
        if(z===1){
                document.getElementById(l+",6").innerHTML = document.getElementById("preto").innerHTML;}
        else if(z===2){
                document.getElementById(l+",6").innerHTML = document.getElementById("preto").innerHTML+document.getElementById("preto").innerHTML;}
        else if(z===3){
                document.getElementById(l+",6").innerHTML = document.getElementById("preto").innerHTML+document.getElementById("preto").innerHTML+document.getElementById("preto").innerHTML;}
        }}
    u++;
    console.log(cs);
}


var ola = 1;
var t = 1;
var adivinha = [];
    
function master(numero) {
    if(ola<5){
    document.getElementById(t+","+ola).innerHTML = document.getElementById("cor"+numero).innerHTML;
    adivinha[ola-1]=numero;
    }
    ola++;
    if(ola===5){
        ola = 1;
        t++;
        jogo(adivinha);
        l++;
        r++;
        if(r===11){
        window.alert(gameover2(), _parent);
    }
    }
    }
var codigo=0;

function master2(numero){
    if(codigo===0){
        cs[0]=numero;
    }
    if(codigo===1){
        cs[1]=numero;
    }
    if(codigo===2){
        cs[2]=numero;
    }
    if(codigo===3){
        cs[3]=numero;
    }
    codigo++;
    if(ola<5){
    document.getElementById("1,"+ola).innerHTML = document.getElementById("cor"+numero).innerHTML;
    cs[ola-1]=numero;
    }
    ola++;
    if (ola===5){
    localStorage.setItem('cs',cs);
    }
    }
    

function apagar(){
    if(ola>1){
        ola=ola-1;
        document.getElementById(t+","+ola).innerHTML = document.getElementById("nada").innerHTML;}
    }

function apagar2(){
    if(ola>1){
    console.log("1,"+ola);
    ola=ola-1;
        document.getElementById("1,"+ola).innerHTML = document.getElementById("1,4").innerHTML;
    }
}

function gameover(){
    window.open('MasterMind_GameOverW.html'); 
}
function gameover2(){
    window.open('MasterMind_GameOverL.html'); 
}
    
function chave(){
    for(var i=1;i<5;i++){
        for(var j=1;j<5;j++){
            console.log(","+i);
            console.log("cor"+j);
            if(adivinha[i-1]===j){
            document.getElementsByClassName(","+i).innerHTML = document.getElementById("cor"+j).innerHTML;}
}}}

function multi(){
    var adivinha = [parseInt(prompt('qual e a 1 opçao?',10)),parseInt(prompt('segunda escolha?',10)),parseInt(prompt('qual e a 3 opçao?',10)),parseInt(prompt('qual e a 4 opçao?',10))];
    window.alert(adivinha);}

