
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

function maiorMenor(ar){
    menor = 0;
    maior = 0;
    
    for (var i=0; i< ar.length; i++){
        if(ar[i] < menor){
            menor = ar[i];        
        }else{
            maior = ar[i];
        }
    }
    document.write("O menor número é " + menor + "<br>");
    document.write("O maior número é " + maior + "<br>");
}

function media(ar){
    soma = 0;
    media = 0;
    for(var i = 0; i< ar.length; i++){
        soma = soma + ar[i];        
    }
    media = soma / ar.length;
    document.write(media);
}

function tamanholista(ar){
    var lista = [];
    soma = 0;
    for (var i = 0 ; i < ar.length; i ++){
        lista.push(ar[i]);
        soma = soma + ar[i].length;
        document.write("Índice " + i + " = " + ar[i] + " --> Tamanho da String = " + ar[i].length + "<br>");
        
    }
    document.write("Lista completa = [" + lista + "] --> Soma do tamanho de todas as Strings = " + soma + "<br>");
}

/* Inverte a ordem da palavra da lista e a ordem da lista também*/
function inverterpalavra(ar){
    var lista = [];
    //for (var i = 0 ; i < ar.length; i ++){
    for (var i = ar.length-1; i >= 0; i--){    
    ar[i] = ar[i].split('').reverse().join(''); 
    lista.push(ar[i]);    
    }
    
    return lista;
}

function mostrarlista(ar){
    var n = prompt("Digite o valor de n: ");
    for (var i = 0; i<n; i++){
        document.write(ar[i] + "<br>");       
    }
}

function removerlista(ar){
    var lista = [];

    var n = prompt("Digite o valor de n: ");

    for (var i = 0; i<ar.length; i++){
        lista.push(ar[i]);     
    }   

   lista.splice(0,n);

    /*for (var i = 0; i< n; i++){
        lista.pop(ar[i]);
    }*/
    
    return lista;
}

function mediaponderada(){

    arpeso = [1,2];
    arvalor = [5,10];
    x = 0;
    y = 0;
    mp = 0; 

    for (var i = 0; i < arpeso.length; i++){
        console.log(x = x + (arpeso[i] * arvalor[i]));
        console.log(y = y + arpeso[i]);        
       
    }

    mp = x/y;

    document.write(mp);

}
