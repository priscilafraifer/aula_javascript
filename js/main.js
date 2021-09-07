
function soma(){    
    var x = prompt("Digite o valor de x: ");
    var y = prompt("Digite o valor de y: "); 
    x = parseInt(x);
    y = parseInt(y);   
    console.log("A soma dos valores digitados é " + (x+y));
}


function somavetor(ar){
    var soma = 0;
    for (var i = 0; i < ar.length; i++){
        soma = soma + ar[i];
    }
    return soma;
}

function inverterlista(ar){
    var lista = [];
    for (var i = ar.length-1; i >= 0; i--){
        lista.push(ar[i]);
    }
    return lista;    
}

function inverterfrase(){
    x = "Meu nome é Camila".split('').reverse().join(''); 
    return x;  
}

function plusMinus(ar){

    var propPos = 0;
    var propNeg = 0;
    var propZero = 0;

    for (var i = 0; i < ar.length; i++){
        if(ar[i] > 0){
            propPos ++;
        }else if(ar[i] < 0){
            propNeg ++;
        }else{
            propZero ++;
        }
    }

    document.write((propPos / ar.length) *100 + "%" + "<br>");
    document.write((propNeg / ar.length) *100 + "%" + "<br>");
    document.write((propZero / ar.length) *100 + "%" + "<br>");
}