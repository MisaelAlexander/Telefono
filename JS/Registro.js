const form = document.getElementById("registroForm");
const mensajeExito = document.getElementById("mensajeExito");
const mensajeError = document.getElementById("mensajeError");
const fotoInput = document.getElementById("foto");
const preview = document.getElementById("preview");

fotoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const dui = document.getElementById("dui").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const foto = fotoInput.files[0];

  mensajeExito.style.display = "none";
  mensajeError.style.display = "none";

  // Validaciones
  if (!nombre || !apellido || !dui || !direccion || !correo || !telefono) {
    mostrarError("Todos los campos son obligatorios.");
    return;
  }

  //nombre y apellido solo letras
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!soloLetras.test(nombre)) {
    mostrarError("El nombre solo debe contener letras.");
    return;
  }

  if (!soloLetras.test(apellido)) {
    mostrarError("El apellido solo debe contener letras.");
    return;
  }

  //correo
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  if (!emailValido) {
    mostrarError("Correo no válido.");
    return;
  }

  //teléfono solo números y de 8 dígitos
  const telefonoValido = /^[0-9]{8}$/.test(telefono);
  if (!telefonoValido) {
    mostrarError("El teléfono debe tener solo 8 dígitos numéricos.");
    return;
  }

  //imagen 
  if (!foto) {
    mostrarError("Debes seleccionar una foto de perfil.");
    return;
  }

  //Si pasa todo
  mensajeExito.style.display = "block";
  form.reset();
  preview.src = "";
  preview.style.display = "none";
});

function mostrarError(mensaje) {
  mensajeError.textContent = mensaje;
  mensajeError.style.display = "block";
}
