var tipoCodigo = document.querySelector('#tipoCodigo');
var botao = document.getElementById ('botao');
var tipoCodigo = document.querySelector('#tipoCodigo');
var incremento = document.getElementById ('incremento');
var cifraDeCesar = document.getElementById ('cifraDeCesar');
var base64 = document.getElementById ('base64');
var textoOriginal = document.getElementById ('textoOriginal');
var textoDecodificado = document.getElementById ('textoDecodificado');
var codifica = document.getElementById ('codificar');
var decodifica = document.getElementById ('decodificar');


codifica.addEventListener('click', function (){
    botao.value = "codificar";
})

decodifica.addEventListener ('click', function (){
    botao.value = "decodificar";
})

function abrir(){
    if(tipoCodigo.value == "cifraDeCesar"){
        incremento.classList.remove("invisivel");
    } else{
        incremento.classList.add("invisivel");
    }
}

function agir(){
    
    
    if (tipoCodigo.value == 'base64' &&  botao.value == "codificar") {
        base64Cod();
        console.log(tipoCodigo.value);
    }
    else if (tipoCodigo.value == 'base64' && botao.value == "decodificar") {
        base64Decod();
    }
    else if (tipoCodigo.value == 'cifraDeCesar' && botao.value == "codificar") { 
        cifraDeCesarC();
    } 
    else if (tipoCodigo.value == 'cifraDeCesar' && botao.value == "decodificar") {
        cifraDeCesarD();
    }
  
}

function base64Cod(){
    textoDecodificado.textContent = btoa(textoOriginal.value);
}

function base64Decod(){
    textoDecodificado.textContent = atob(textoOriginal.value);
}

function cifraDeCesarC() {
    let inc = parseInt(incremento.value);
    let arr = textoOriginal.value.toLowerCase();
    var arr_sp = arr.split('');
    var textoNovo=[];
    var tabela=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    


    for(var i=0; i<arr.length; i++){

        for(var l=0; l<tabela.length; l++){
            if(arr_sp[i]==tabela[l]){            
                if(l+inc<tabela.length)
                {
                textoNovo.push(tabela[l+inc]);
                }else{
                    textoNovo.push(tabela[l+inc-tabela.length]);
                }
             break;
            }else if(l==tabela.length-1){
                textoNovo.push(arr_sp[i]);
            }
        }
    }
    textoDecodificado.textContent=textoNovo.join('');

}

function cifraDeCesarD() {
    let inc = parseInt(incremento.value);
    let arr = textoOriginal.value.toLowerCase();
    var arr_sp = arr.split('');
    var textoNovo=[];
    var tabela=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    


    for(var i=0; i<arr.length; i++){

        for(var l=0; l<tabela.length; l++){
            if(arr_sp[i]==tabela[l]){            
                if(l-inc<0)
                {
                    textoNovo.push(tabela[l-inc+tabela.length]);
                }else{
                    textoNovo.push(tabela[l-inc]);
                }
             break;
            }else if(l==tabela.length-1){
                textoNovo.push(arr_sp[i]);
            }
        }
    }
    textoDecodificado.textContent=textoNovo.join('');

}