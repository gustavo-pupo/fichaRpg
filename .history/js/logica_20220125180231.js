window.onload = function(){
    
    nivel.value = localStorage.getItem("nivel");

    constituicao.value = localStorage.getItem("const");
    var vida = constituicao.value*50;
    maxVida.value = vida;

    intel.value = localStorage.getItem("int");
    var mana = intel.value*5;
    maxMana.value = mana;
    /////////////////////////
    forca.value = localStorage.getItem("for");
    dex.value = localStorage.getItem("dex");
    fai.value = localStorage.getItem("fai");
    /////////////////////////

    platina.value = localStorage.getItem("plat");
    ouro.value = localStorage.getItem("ouro");
    prata.value = localStorage.getItem("prata");
    bronze.value = localStorage.getItem("bronze");
}

var nivel = document.getElementById("nivel");
var maxVida = document.getElementById("vidaMax");
var qtdVida = document.getElementById("qtdVida");
var maxMana = document.getElementById("manaMax");
var qtdMana = document.getElementById("qtdMana");
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
    localStorage.setItem("vidaMax",maxVida.value);
    localStorage.setItem("qtdVida",qtdVida.value);
    localStorage.setItem("manaMax",maxMana.value);
    localStorage.setItem("qtdMana",qtdMana.value);

    localStorage.setItem("const",constituicao.value);
    localStorage.setItem("for",forca.value);
    localStorage.setItem("dex",dex.value);
    localStorage.setItem("int",intel.value);
    localStorage.setItem("fai",fai.value);

    while(bronze.value >= 100){
        bronze.value = bronze.value - 100;
        prata.value = parseInt(prata.value) + 1;
    }

    while(prata.value >= 100){
        prata.value = prata.value - 100;
        ouro.value = parseInt(ouro.value) + 1;
    }

    while(ouro.value >= 100){
        ouro.value = ouro.value - 100;
        platina.value = parseInt(platina.value) + 1;
    }

    localStorage.setItem("plat",platina.value);
    localStorage.setItem("ouro",ouro.value);
    localStorage.setItem("prata",prata.value);
    localStorage.setItem("bronze",bronze.value);
    
    location.reload();
}