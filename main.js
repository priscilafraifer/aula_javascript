function rasparCBF(documento){
    var divsFatec = documento.querySelectorAll(".col-md-12");
    var div = document.querySelector(".info");
    divsFatec.forEach(df => {
        div.appendChild(df);
    });
}

function mandarReq(site,rasp){
    
    fetch(site)
             .then(resp => resp.text())
             .then(str => {
                 var domp = new DOMParser();
                 var documento = domp.parseFromString(str,"text/html");
                 rasp(documento);
             })
             .catch(e => document.write(e));
}


function principal(){
   
    document.querySelector("#btnCBF")
        .addEventListener("click", function(){
            mandarReq("https://www.cbf.com.br/tabela",rasparCBF);
        });
    
    
}

window.onload = principal;
