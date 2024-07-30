// Funciones de encriptado y desencriptado
function encriptar(texto) {
    if (!texto) return '';
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    if (!texto) return '';
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}


// Eventos de botones
document.querySelector('.encriptar-btn').addEventListener('click', () => {
    procesarTexto(encriptar);
});

document.querySelector('.desencriptar-btn').addEventListener('click', () => {
    procesarTexto(desencriptar);
});

function procesarTexto(callback) {
    const inputText = document.getElementById('input-text').value;
    const outputText = callback(inputText);
    document.getElementById('output-text').value = outputText;
}

