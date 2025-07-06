const form = document.getElementById("registroForm");
const mensajeExito = document.getElementById("mensajeExito");
const mensajeError = document.getElementById("mensajeError");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const usuario = document.getElementById("usuario").value.trim();
  const gmail = document.getElementById("gmail").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmar = document.getElementById("confirmar").value.trim();

  mensajeExito.style.display = "none";
  mensajeError.style.display = "none";

  // Validaciones
  if (!usuario || !gmail || !password || !confirmar) {
    mostrarError("Todos los campos son obligatorios.");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail);
  if (!emailValido) {
    mostrarError("El correo no es válido.");
    return;
  }

  if (password.length < 6) {
    mostrarError("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  if (password !== confirmar) {
    mostrarError("Las contraseñas no coinciden.");
    return;
  }

  // Si pasa todo
  mensajeExito.style.display = "block";
  form.reset();
});

function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.style.display = "block";
}