document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formDatosUsuario");
  const campos = form.querySelectorAll("input, button");
  const nombreUsuarioSpan = document.getElementById("nombreUsuario");
  const estaRegistrado = sessionStorage.getItem("usuarioRegistrado") === "true";

  if (!estaRegistrado) {
    // Usuario NO registrado
    nombreUsuarioSpan.textContent = "Invitado";
    campos.forEach(campo => campo.disabled = true);
    alert("Debes registrarte o iniciar sesión para editar tu perfil.");
  } else {
    // Usuario registrado
    const nombreGuardado = sessionStorage.getItem("nombreUsuario") || "Usuario registrado";
    nombreUsuarioSpan.textContent = nombreGuardado;
    campos.forEach(campo => campo.disabled = false);

    // Cargar imagen guardada
    const fotoGuardada = localStorage.getItem("fotoUsuario");
    if (fotoGuardada) {
      document.getElementById("imagenUsuario").src = fotoGuardada;
    }

    // Cambiar foto
    document.getElementById("botonCambiarFoto").addEventListener("click", () => {
      document.getElementById("inputArchivo").click();
    });

    document.getElementById("inputArchivo").addEventListener("change", (e) => {
      const archivo = e.target.files[0];
      if (archivo) {
        const lector = new FileReader();
        lector.onload = function (event) {
          document.getElementById("imagenUsuario").src = event.target.result;
          localStorage.setItem("fotoUsuario", event.target.result);
        };
        lector.readAsDataURL(archivo);
      }
    });

    // Guardar datos
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const datos = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        colegio: document.getElementById("colegio").value,
        correo: document.getElementById("correo").value,
        ciudad: document.getElementById("ciudad").value
      };
      localStorage.setItem("datosUsuario", JSON.stringify(datos));
      alert("Datos guardados correctamente.");
    });

    // Cargar datos si ya existen
    const datosGuardados = localStorage.getItem("datosUsuario");
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      document.getElementById("nombres").value = datos.nombres || "";
      document.getElementById("apellidos").value = datos.apellidos || "";
      document.getElementById("colegio").value = datos.colegio || "";
      document.getElementById("correo").value = datos.correo || "";
      document.getElementById("ciudad").value = datos.ciudad || "";
    }
  }
});
