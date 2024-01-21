const texto = document.getElementById("texto");
const btnEnviar = document.getElementById("btn-enviar");
const resultado = document.getElementById("resultado");

btnEnviar.addEventListener("click", function() {
    const textoEnviado = texto.value;
    resultado.innerHTML = "Resultado:";
    resultado.innerHTML += "<br>";
    resultado.innerHTML += "Palavras: " + textoEnviado.split(" ").length + " ";
    resultado.innerHTML += "Repetições: ";
    
    const palavras = textoEnviado.split(" ");
    const contagemPalavras = {};  // Usaremos um objeto para armazenar as contagens de palavras
    
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        
        // Verificamos se a palavra já existe no objeto de contagem
        if (contagemPalavras[palavra] === undefined) {
            contagemPalavras[palavra] = 1;
        } else {
            contagemPalavras[palavra]++;
        }
    }
    
    // Exibimos as contagens no resultado
    for (const palavra in contagemPalavras) {
        resultado.innerHTML += palavra + ": esse(a) corretor(a) fez " + contagemPalavras[palavra] + " período<br>";
    }
    
    // Calculamos e exibimos as repetições totais
    let repeticoesTotais = 0;
    for (const palavra in contagemPalavras) {
        repeticoesTotais += contagemPalavras[palavra];
    }
    resultado.innerHTML += "Repetições totais: " + repeticoesTotais;
});
