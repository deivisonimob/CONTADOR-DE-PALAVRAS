const texto = document.getElementById("texto");
const btnEnviar = document.getElementById("btn-enviar");
const resultado = document.getElementById("resultado");

btnEnviar.addEventListener("click", function() {
        const textoEnviado = texto.value;
        resultado.innerHTML = "Resultado:";
        resultado.innerHTML += "<br>";
        resultado.innerHTML += "Palavras: " + textoEnviado.split(" ").length + " ";
        resultado.innerHTML += "Repetições: ";
        let contagemRepeticoes = 0;
        const palavras = textoEnviado.split(" ");
        for (let i = 0; i < palavras.length; i++) {
            const palavra = palavras[i];
            const contagem = contagemRepeticoes + 1;
            resultado.innerHTML += palavra + ":" + contagem + "<br>";
            contagemRepeticoes = contagem;
        }
    });