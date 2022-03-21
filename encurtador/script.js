function encurtarUrl(){
    //valida se o link existe
    let url = document.querySelector("#input-url").value;
    if(!url){
        alert('Digite uma URL')
        return
        
    }
    
    
    //API KEY: b47ccd265dfa4094811a25f6e37c2d00
    
    
    //headers
    let headers = {
        "Content-Type": "application/json",
        "apikey": "b47ccd265dfa4094811a25f6e37c2d00"   
    }
    
    //dados
    let linkRequest = {
        destination: url,
        domain:{ fullName: "rebrand.ly"}
    }
    
    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)   
    })
    .then(response => {
        if(!response.ok){
            alert("Url invalida")
            
        }
        return response.json()
        
        
    })
    .then(json => {
            let inputUrl = document.querySelector("#input-url");
            inputUrl.value = json.shortUrl;
            if(json.shortUrl == undefined){
                inputUrl.value=''
            }
        })
        
}
function copiar(){
    let inputUrl = document.querySelector("#input-url");
    //seleciona o texto a ser copiado
    inputUrl.select();

    //copiar para dispositivos moveis
    inputUrl.setSelectionRange(0,99999)
    //copiar para desktop
    navigator.clipboard.writeText(inputUrl.value)

    alert(`URL copiada : ${inputUrl.value}`)


    
}