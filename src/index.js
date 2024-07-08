/* 
Encriptador de texto

1. Capturar el texto ingresado por el usuario con el botón "encriptar"
2. Crear una función que reciba el texto y lo encripte con .replace y utilizar gi que capitaliza las palabras del input. 
3. Mostrar el texto encriptado en el input
4. Crear otra función que reciba el texto y desencripte el texto
5. Crear una función de copiar el texto del input recibido 


La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Ejemplo: "hola" -> "hoberlai"

*/
function textoUsuario() {
  let texto = document.getElementById("input-usuario").value;
  let encriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  document.getElementById("input-encriptado").value = encriptado;
}

function desencriptar() {
  let texto = document.getElementById("input-usuario").value;
  let desencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.getElementById("input-encriptado").value = desencriptado;
}

document.getElementById("encriptar").onclick = textoUsuario;
document.getElementById("desencriptar").onclick = desencriptar;
