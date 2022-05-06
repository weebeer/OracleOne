var inputTexto = document.querySelector(".input-texto");
var mensagem = document.querySelector(".mensagem");

function btnCodificador() {
    var textoCodificado = encriptar(inputTexto.value)
    mensagem.value = textoCodificado
    mensagem.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a","fiss,"],["e","ente,"],["i","imes,"],["o","ober,"],["u","unis,"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0 ; i < matrizCodigo.length ; ++i) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada   
}