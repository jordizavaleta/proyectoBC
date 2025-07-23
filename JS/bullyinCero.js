//REGISTRO
window.addEventListener('load', function () {
  const botonRegistrar = document.getElementById('registrar');
  const estaRegistrado = sessionStorage.getItem('usuarioRegistrado');

  if (estaRegistrado === 'true' && botonRegistrar) {
    botonRegistrar.style.display = 'none';
  }
});




//JQUERY
$(document).ready(function () {
  //Efecto al pasar el mouse por cada artículo de sección
  $(".secc-desplie article").hover(function () {
    $(this).css("transform", "scale(1.05)");
    $(this).css("box-shadow", "0 8px 16px rgba(0, 0, 0, 0.3)");
  }, function () {
    $(this).css("transform", "scale(1)");
    $(this).css("box-shadow", "none");
  });

  //Cambia el texto principal al hacer clic en el título
  $("#titulo").click(function () {
    $(this).text("¡Gracias por visitar BullyingCero!");
  });

  //Animación para mostrar pie de página lentamente
  $(".footer").hide().fadeIn(1500);
});
