function ajax(tipo, url, elemento = null) {
    const xhr = new XMLHttpRequest();       
    xhr.open(tipo, url);  
    xhr.send();  
    xhr.onreadystatechange = xhr.onreadystatechange = () => {        
        if (xhr.readyState == 4) {            
            if (xhr.status == 200) {
                const respuesta = xhr.responseText;
                if (elemento != null)                
                    elemento.innerHTML = respuesta;
            }
        } else {
            if (elemento != null)
                elemento.innerHTML = 'Cargando...';
        }
    }    
}