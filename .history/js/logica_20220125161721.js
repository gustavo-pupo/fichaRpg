window.onload = function(){
    nivel.value = localStorage.getItem("nivel")
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

    localStorage.setItem("plat",platina.value);
    localStorage.setItem("ouro",ouro.value);
    localStorage.setItem("prata",prata.value);
    localStorage.setItem("bronze",bronze.value);
}