/* 
Se genera una función que reciba el valor input encriptado del usuario 
navigator.clipboard intenta copiar el texto al portapapeles
si es exitosa la operación, se procede a obtener el dato con el ID, para imprimir en el <p> mensaje. En caso de error, aparece el error en pantalla
Posteriormente, se espera a que los elementos estén cargados para agregar un evento en el botón y copiar el contenido de la función anterior que devuelve el valor del "input-encriptado"

*/

function copiarContenido() {
  let texto = document.getElementById("input-encriptado").value;

  navigator.clipboard
    .writeText(texto)
    .then(function () {
      let copiaExitosa = document.getElementById("mensaje");
      copiaExitosa.textContent = "Texto copiado al portapapeles";
    })
    .catch(function (err) {
      let copiaFallida = document.getElementById("mensaje");
      copiaFallida.textContent = "Error al copiar texto: " + err;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("copiar-texto")
    .addEventListener("click", copiarContenido);
});
