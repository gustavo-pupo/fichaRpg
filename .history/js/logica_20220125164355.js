window.onload = function(){
    
    nivel.value = localStorage.getItem("nivel");

    constituicao.value = localStorage.getItem("const");
    var vida = constituicao.value*50;
    qtdVida.value = vida;
    
    intel.value = localStorage.getItem("int");
    var mana = intel.value*5;
    qtdMana.value = mana;
    /////////////////////////
    forca.value = localStorage.getItem("for");
    dex.value = localStorage.getItem("dex");
    fai.value = localStorage.getItem("fai");
}

var nivel = document.getElementById("nivel");
var qtdVida = document.getElementById("vida")
var qtdMana = document.getElementById("mana");
//var rankAventura = document.getElementById("RA");

var constituicao = document.getElementById("con");
var forca = document.getElementById("for");
var dex = document.getElementById("dex");
var intel = document.getElementById("int");
var fai = document.getElementById("fai");

var platina = document.getElementById("plat");
var ouro = document.getElementById("ouro");
var prata = document.getElementById("prata");
var bronze = document.getElementById("bronze");

function salvar(){
    localStorage.setItem("nivel",nivel.value);
    localStorage.setItem("vida",qtdVida.value);
    localStorage.setItem("mana",qtdMana.value);

    localStorage.setItem("const",constituicao.value);
    localStorage.setItem("for",forca.value);
    localStorage.setItem("dex",dex.value);
    localStorage.setItem("int",intel.value);
    localStorage.setItem("fai",fai.value);

    while(bronze.value >= 100){
        bronze.value-=100;
        prata.value = parseInt(prata.value+1);
    }

    localStorage.setItem("plat",platina.value);
    localStorage.setItem("ouro",ouro.value);
    localStorage.setItem("prata",prata.value);
    localStorage.setItem("bronze",bronze.value);
    
}