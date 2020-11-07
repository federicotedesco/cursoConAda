window.onload = iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
  var elemento = document.getElementById("nombre");
  if (!elemento.checkValidity()){
    if (elemento.validity.valueMissing){
      error2(elemento, "Debe intruducir un nombre");
    }
    if (elemento.validity.patternMismatch){
      error2(elemento, "El nombre debe tener entre 2 y 15 caracteres.");
    }
  //  error(elemento);
    return false;
  }
  return true;
}

function validaEdad() {
  var elemento = document.getElementById("edad");
  if (!elemento.checkValidity()){
    if (elemento.validity.valueMissing){
      error2(elemento, "Debe intruducir una Edad");
    }
    if (elemento.validity.rangeOverflow) {
      error2(elemento, "Debes y menor que 100");
    }

    error(elemento);
    return false;
  }
  return true;

}

function validaTelefono() {
  var elemento = document.getElementById("telefono");
  if (!elemento.checkValidity()){
    error(elemento);
    return false;
  }
  return true;
}

function validar(e) {
  borrarError();
  if(validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar")){
    return true;
  }else{
    e.preventDefault();
    return false;
  }
}

function error(elemento){
  document.getElementById("mensajedeerror").innerHTML = elemento.validationMessage;
  elemento.className="error";
  elemento.focus();
}

function error2 (elemento, mensaje){
  document.getElementById("mensajedeerror").innerHTML = mensaje;
  elemento.className="error";
  elemento.focus();
}

function borrarError() {
  var formulario = document.forms[0];
  for(var i=0; i<formulario.elements.length; i++ ){
    formulario.elements[i].className="";
  }

}
