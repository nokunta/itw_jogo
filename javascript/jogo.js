'use strict';
var numerosIguais = 0;
var q = 0;
var l = 1;
var r = 1;
var pontuaçao=0;
var pontuacoes=[];

var u = 0;
var cs = [Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)];

var jogo = function playRound(adivinha) {
    numerosIguais = 0;
    var z = 0;
    var x = 0;
    if (u < 10) {
        console.log(adivinha);
        var t, p = 0;
        for (var i = 0;i < cs.length;i++){
            if(cs[i]===adivinha[i]){
                numerosIguais++;
            }
        if(numerosIguais===4){
            console.log("entrei");
            pontuaçao=pontuaçao+pontua;
            localStorage.setItem('pontuaçao',pontuaçao);
            pontuacoes = pontuacoes + localStorage.getItem('pontuaçao');
            location.reload();
            window.alert(gameover(), _parent);
    }
        else if(numerosIguais!=4){
            var z = 0;
            var x = 0;
            var r = 1;
            for(var j=0;j<cs.length;j++){
                var r = 1;
                var t =0;
                if(cs[j]===adivinha[j]){
                        z++;
                        t++;
                        console.log("preta"+z);
                    }
                for(var p=0;p<adivinha.length;p++){
                    if(cs[p]===adivinha[j]){
                         if(j!=p){
                            if(r<2){
                                if(t<1){
                            r++;
                            x++;
                            console.log(r);
                            console.log("branca"+x);
                        }}}
                    }}}
        }
            var branco = document.getElementById("branco").innerHTML;
        if(x===1){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML;
                pontuaçao=pontuaçao+1;}
        else if(x===2){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML;
                pontuaçao=pontuaçao+1;}
        else if(x===3){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML;
                pontuaçao=pontuaçao+1;}
        else if(x===4){
                document.getElementById(l+",5").innerHTML = document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML+document.getElementById("branco").innerHTML;
                pontuaçao=pontuaçao+1;}
        var preto = document.getElementById("preto").innerHTML;
        if(z===1){
                document.getElementById(l+",6").innerHTML = document.getElementById("preto").innerHTML;
                pontuaçao=pontuaçao+5;
        }
        else if(z===2){
                document.getElementById(l+",6").innerHTML = document.getElementById("preto").innerHTML+document.getElementById("preto").innerHTML;
                pontuaçao=pontuaçao+5;}
        else if(z===3){
                document.getElementById(l+",6").innerHTML = document.getElementById("preto").innerHTML+document.getElementById("preto").innerHTML+document.getElementById("preto").innerHTML;
                pontuaçao=pontuaçao+5;}
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

function pontuaçaoo(){
    var pontuaçao = localStorage.getItem('pontuaçao');
    document.getElementById("pontuaçao").innerHTML = pontuaçao;
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
    localStorage.setItem('cs',cs);
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
        document.getElementById("1,"+ola).innerHTML = document.getElementById("nada").innerHTML;
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

function coop(){
    var modo = "coop";
    localStorage.setItem('modo',modo);
}

function multi(){
    var modo = "multi";
    localStorage.setItem('modo',modo);
}

function single(){
    var modo = "single";
    localStorage.setItem('modo',modo);
}

function facil(){
    var dif = "facil";
    localStorage.setItem("dif",dif);
}

function normal(){
    var dif = "normal";
    localStorage.setItem("dif",dif);
}

function normal(){
    var dif = "normal";
    localStorage.setItem("dif",dif);
}