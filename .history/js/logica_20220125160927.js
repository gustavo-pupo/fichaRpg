// window.onload = function(){

// }

var nivel = document.getElementById("nivel");
var qtdVida = constituicao.value*50;
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
    localStorage.setItem("nivel",nivel.value)
    localStorage.setItem("vida",constituicao.value*50)
    localStorage.setItem("mana",intel.value*5)
    localStorage.setItem("const",constituicao.value)
}