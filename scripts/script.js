// função add guia
function duplicarCampos(){
    var clone = document.getElementById('origem').cloneNode(true);
    var destino = document.getElementById('destino');
    destino.appendChild (clone);
    
    var camposClonados = clone.getElementsByTagName('input');
    
    for(i=0; i<camposClonados.length;i++){
        camposClonados[i].value = '';
    }
    
    
    
}

function removerCampos(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('destino')

    
    //deletar o campo
    span.parentNode.remove()
}


