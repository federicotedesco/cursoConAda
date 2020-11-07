window.onload = iniciar; //Sin paréntesis

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (!elemento.value) {
        alert("El campo no puede ser vacío");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
  var elemento = document.getElementById("telefono");
  limpiarError(elemento);
  if (!elemento.value){
    alert("El campo no puede ser vacío");
    error(elemento);
    return false;
  }
  if (isNaN(elemento.value)){
    alert("El campo debe ser un numero");
    error(elemento);
    return false;
  }
  return true;
}

function validaFecha() {
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var ano = document.getElementById("ano").value;

  if ( !dia | !mes | !ano ) {
    alert("El campo no puede ser vacío");
    error(elemento);
    return false;
  }
  var fecha = new Date(ano, mes, dia);
  if(isNaN(fecha)){
    alert("Los campos de fecha son incorrectos");
    error(elemento);
    return false;
  }
  return true;
}

function validaCheck() {
  var mayor = document.getElementById("mayor");
  if (!mayor.checked){
    alert("Debes ser mayor");
    error(elemento);
    return false
  }
  return true;
}


function validar(e) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaCheck() && confirm("Debes apretar aceptar")) {
      alert("todo bien");
      return true;
    } else {
      e.preventDefault();
      return false;
    }
}

function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}

function limpiarError(elemento) {
  elemento.className ="";
}
