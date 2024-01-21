const texto = document.getElementById("texto");
const btnEnviar = document.getElementById("btn-enviar");
const resultado = document.getElementById("resultado");

btnEnviar.addEventListener("click", function() {
    const textoEnviado = texto.value;
    resultado.innerHTML = "Resultado:";
    resultado.innerHTML += "<br>";
    resultado.innerHTML += "Número de corretores(as): " + textoEnviado.split(" ").length + " ";
    resultado.innerHTML += "<br>";
    resultado.innerHTML += "Contagem de períodos na roleta: ";
    resultado.innerHTML += "<br>";
    
    const palavras = textoEnviado.split(" ");
    const contagemPalavras = {}; 
    
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        
        
        if (contagemPalavras[palavra] === undefined) {
            contagemPalavras[palavra] = 1;
        } else {
            contagemPalavras[palavra]++;
        }
    }
    
    
    for (const palavra in contagemPalavras) {
        resultado.innerHTML += palavra + ": esse(a) corretor(a) fez " + contagemPalavras[palavra] + " período<br>";
    }
    
    
    let repeticoesTotais = 0;
    for (const palavra in contagemPalavras) {
        repeticoesTotais += contagemPalavras[palavra];
    }
    resultado.innerHTML += "Corretore(as) totais: " + repeticoesTotais;
});
