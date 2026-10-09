const expresion = document.getElementById("expresion");

function suma() {
    expresion.innerHTML += "+";
}
function resta() {
    expresion.innerHTML += "-";
}
function multiplicacion() {
    expresion.innerHTML += "*";
}
function division() {
    expresion.innerHTML += "/";
}
function numero(n) {
    expresion.innerHTML += n;
}
function decimal() {
    expresion.innerHTML += ".";
}
function limpiar() {
    expresion.innerHTML = "";
}
function resultado() {
    ecuacion = expresion.innerHTML;
    ecuacion = eval(ecuacion);
    expresion.innerHTML = ecuacion
}