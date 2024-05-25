function mostrarError(mensaje) {
  const elementoModalError = document.getElementById("modal-error");
  const modal = new bootstrap.Modal(elementoModalError, {});

  document.getElementById("mensaje-error").innerHTML =
    "El correo o la contraseña no son correctos. " +
    "Asegurate de escribir bien las mayusculas y los numeros...";

  modal.show();
}

function validarCredencialesFacil(correo, password) {
  const datosUsuario = window.UsuariosEscupi[correo];
  if (!datosUsuario) {
    // alert("No existe el usuario " + correo);
    mostrarError("No existe el usuario " + correo);
    return false;
  }

  if (datosUsuario.password !== password) {
    mostrarError("La contraseña no es correcta");
    //alert("La contraseña no es correcta");
    return false;
  }

  return true;
}

function ingresarFacil(correo) {
  if (correo === "f") {
    window.location.href = "class.html";
  } else {
    window.location.href = "student-class.html";
  }
}

function iniciarSesion() {
  var sCorreo = "";
  var sContrasenna = "";
  var bAcceso = false;

  sCorreo = document.querySelector("#txtCorreo").value;
  sContrasenna = document.querySelector("#txtContrasenna").value;

  bAcceso = validarCredencialesFacil(sCorreo, sContrasenna);

  if (bAcceso == true) {
    localStorage.setItem("usuario", sCorreo);
    ingresarFacil(sCorreo);
  }
}

var boton = document.getElementById("btnIngresar");
boton.addEventListener("click", iniciarSesion);
