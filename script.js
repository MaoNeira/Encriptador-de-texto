document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (validateText(inputText)) {
        const encryptedText = encryptText(inputText);
        displayOutput(encryptedText);
    } else {
        alert('Solo letras minúsculas y sin acentos');
    }
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (validateText(inputText)) {
        const decryptedText = decryptText(inputText);
        displayOutput(decryptedText);
    } else {
        alert('Solo letras minúsculas y sin acentos');
    }
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado');
});

function validateText(text) {
    return /^[a-z\s]+$/.test(text);
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
    return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
}

function displayOutput(text) {
    document.getElementById('placeholderImage').style.display = 'none';
    document.getElementById('placeholderText').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('outputText').value = text;
}
