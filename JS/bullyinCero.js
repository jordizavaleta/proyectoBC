// REGISTRO
// Espera a que toda la página haya cargado
window.addEventListener('load', function () {

  // Obtiene el botón con id "registrar"
  const botonRegistrar = document.getElementById('registrar');

  // Revisa si en sessionStorage existe la clave 'usuarioRegistrado' con valor 'true'
  const estaRegistrado = sessionStorage.getItem('usuarioRegistrado');

  // Si el usuario ya está registrado y el botón existe
  if (estaRegistrado === 'true' && botonRegistrar) {
    // Oculta el botón de registro
    botonRegistrar.style.display = 'none';
  }
});

  function redirigir() {
    window.location.href = "HTML/registro.html";
  }

// JQUERY

// Espera a que el DOM esté completamente cargado
$(document).ready(function () {

  // Aplica un efecto hover a todos los <article> dentro de .secc-desplie, excepto el que tiene id="pres-pag"
  $(".secc-desplie article").not("#pres-pag").hover(
    function () {
      // Al pasar el mouse: escala y agrega sombra
      $(this).css({
        "transform": "scale(1.05)",
        "box-shadow": "0 8px 16px rgba(0, 0, 0, 0.3)"
      });
    },
    function () {
      // Al quitar el mouse: vuelve a la escala original y quita la sombra
      $(this).css({
        "transform": "scale(1)",
        "box-shadow": "none"
      });
    }
  );

  // Cuando se hace clic sobre el elemento con id "titulo"
  $("#titulo").click(function () {
    // Cambia el texto del título
    $(this).text("¡Gracias por visitar BullyingCero!");
  });

  // Oculta el footer y lo muestra con un efecto de fundido lento (fadeIn)
  $(".footer").hide().fadeIn(1500);
});