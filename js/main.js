
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
    menor = ar[0];
    maior = ar[0];
    
    for (var i=0; i< ar.length; i++){
        
        if(ar[i] < menor){
            menor = ar[i];        
        }
    }

    
    for (var i=0; i< ar.length; i++){
        
        if(ar[i] > maior){
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

/**
 * Faça uma função que receba um número n e
 * uma lista arr, ela deverá remover
 * os n primeiros elementos de arr.
 */
 function drop(n,arr){
    if(n >= arr.length)
        return [];
    else{
        var aux = [];
        for(var i=n; i < arr.length; i++)
            aux.push(arr[i]);
        return aux;
    }
}

function teste(){
    document.write("1 ");
    document.write(drop(0,"FATEC"));
    document.write("<br>");
    document.write("2 ");
    document.write(drop(3,"FATEC"));
    document.write("<br>");
    document.write("3 ");
    document.write(drop(4,"FATEC"));
    document.write("<br>");
    document.write("4 ");
    document.write(drop(5,"FATEC"));
    document.write("<br>");
    document.write("5 ");
    document.write(drop(6,"FATEC"));
    document.write("<br>");
    document.write("6 ");
    document.write(drop(2,"FATEC"));
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

/*Lista 2*/

function testeEx1(){
    calcMedia([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function calcMedia(objs){
    var soma = 0;
    var media = 0;
    for(var i=0; i < objs.length; i++){
        soma = soma + objs[i].preco;
    }
    media = soma/objs.length;
    document.write("A média é " + media + "<br>");

}

function testeEx2(){
    calcmin([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function calcmin(objs){
    
    menor = objs[0].preco;
    
    //console.log(menor);     
    
    for (var i=0; i< objs.length; i++){
        if(objs[i].preco < menor){
            menor = objs[i].preco;                  
        }   
    
    }

    //return menor;
    document.write("O menor número é " + menor + "<br>");
}

function testeEx3(){
    calcmax([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function calcmax(objs){    
    
    maior = objs[0].preco;
    //console.log(maior);
    for (var i=0; i< objs.length; i++){
        if(objs[i].preco > maior){
            maior = objs[i].preco;                  
        }    
        
    }    
    //return maior;
    document.write("O maior número é " + maior + "<br>");   
}

function testeEx4(){
    listarnomes([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function listarnomes(objs){
    var lista = [];
    for (var i=0; i< objs.length; i++){           
        lista = lista + objs[i].nome + ", ";
    }
    document.write(lista +"<br>");
}

function testeEx5(){
    quantidadeprodutos([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function quantidadeprodutos(objs){
    var quantidade = 0;
    for (var i=0; i< objs.length; i++){           
        //quantidade = quantidade + objs[i].qtdVendida;
        quantidade = quantidade + 1;
    }
    document.write("A quantidade de produtos é " + quantidade + "<br>");
}

function testeEx6(){
    lucrototal([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function lucrototal(objs){
    var lucro = 0;
    for (var i=0; i< objs.length; i++){           
        lucro = lucro + objs[i].preco * objs[i].qtdVendida;
        //console.log(lucro);
    }
    document.write("O lucro total de vendas é R$ " + lucro + "<br>");
}

function testeEx7(){
    maiorqtdvendida([
 {nome: "Item1", preco: 7.9, qtdVendida: 40}
 ,{nome: "Item2", preco: 12, qtdVendida: 10}
 ,{nome: "Item3", preco: 20, qtdVendida: 50}
 ,{nome: "Item4", preco: 1.5, qtdVendida: 500}
 ,{nome: "Item5", preco: 15, qtdVendida: 4}
]);
}

function maiorqtdvendida(objs){    
    
    maior = objs[0].qtdVendida;
    nomeproduto = "";
    //console.log(maior);
    for (var i=0; i< objs.length; i++){
        if(objs[i].qtdVendida > maior){
            maior = objs[i].qtdVendida; 
            nomeproduto = objs[i].nome;               
        }           
        
    }  
    
    //return maior;
    document.write("O produto com maior quantidade vendida é o " + nomeproduto + " com " + maior + " vendas " + "<br>");   
}