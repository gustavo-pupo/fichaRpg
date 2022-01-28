window.onload = function(){
    
    nome.value = localStorage.getItem("nome");

    nivel.value = localStorage.getItem("nivel");

    constituicao.value = localStorage.getItem("const");
    var vida = constituicao.value*50;
    maxVida.innerHTML = "/" + vida;
    qtdVida.value = localStorage.getItem("qtdVida");

    intel.value = localStorage.getItem("int");
    var mana = intel.value*5;
    maxMana.innerHTML = "/" + mana;
    qtdMana.value = localStorage.getItem("qtdMana");
    /////////////////////////
    forca.value = localStorage.getItem("for");
    dex.value = localStorage.getItem("dex");
    fai.value = localStorage.getItem("fai");
    /////////////////////////

    platina.value = localStorage.getItem("plat");
    ouro.value = localStorage.getItem("ouro");
    prata.value = localStorage.getItem("prata");
    bronze.value = localStorage.getItem("bronze");
    
    classe.value = localStorage.getItem("classe");

    mudarBG();    

    garantir(bronze);
    garantir(prata);
    garantir(ouro);
    garantir(platina);
    garantir(forca);
    garantir(constituicao);
    garantir(dex);
    garantir(intel);
    garantir(fai);
    garantirVida();
    garantirMana();
}

var nome = document.getElementById("nome");
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

var classe = document.getElementById("classes");

function garantir(atributo){
    if(atributo.value == ''){
        atributo.value = 0;
    }
}

function garantirVida(){
    vida = constituicao.value*50;
    if(qtdVida.value == ''){
        qtdVida.value = vida;
    }
}

function garantirMana(){
    mana = intel.value*5;
    if(qtdMana.value == ''){
        qtdMana.value = mana;
    }
}


function mudarBG(){
    if(window.innerWidth > 600){
        if(classe.value == 1){
            document.body.style.backgroundImage = "url('../imagens/guerreiro.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "100%";
        }else if(classe.value == 2){
            document.body.style.backgroundImage = "url('../imagens/arqueiro.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "100%";
        }else if(classe.value == 3){
            document.body.style.backgroundImage = "url('../imagens/espadachim.png')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "100%";
        }else if(classe.value == 0){
            document.body.style.backgroundColor = "#f2f2f2";
        }
    }else{
        if(classe.value == 1){
            document.body.style.backgroundImage = "url('../imagens/guerreiro.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "450%";
            document.body.style.backgroundPosition = "90% 0";
            
        }else if(classe.value == 2){
            document.body.style.backgroundImage = "url('../imagens/arqueiro.jpg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "400%";
            document.body.style.backgroundPosition = "70% 0";
        }else if(classe.value == 3){
            document.body.style.backgroundImage = "url('../imagens/espadachim.png')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "400%";
            document.body.style.backgroundPosition = "65% 0";
        }else if(classe.value == 0){
            document.body.style.backgroundColor = "#f2f2f2";
        }
    }
}

function salvar(){
    localStorage.setItem("nome", nome.value)

    localStorage.setItem("nivel",nivel.value);
    // localStorage.setItem("vidaMax",maxVida.value);
    localStorage.setItem("qtdVida",qtdVida.value);
    // localStorage.setItem("manaMax",maxMana.value);
    localStorage.setItem("qtdMana",qtdMana.value);

    localStorage.setItem("const",constituicao.value);
    localStorage.setItem("for",forca.value);
    localStorage.setItem("dex",dex.value);
    localStorage.setItem("int",intel.value);
    localStorage.setItem("fai",fai.value);

    localStorage.setItem("classe", classe.value)

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

    // if(classe.value == 1){
    //     document.body.style.backgroundImage = "url('guerreiro.jpg')";
    // }
    
    

    location.reload();
}