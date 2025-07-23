//JQUERY
$(document).ready(function () {
  //Animación para mostrar pie de página lentamente
  $(".footer").hide().fadeIn(1500);
});

$(document).ready(function () {
  // Ocultamos todos los contenidos al inicio
  $('.bloque .contenido').hide();

  // Al pasar el mouse por primera vez, mostramos y dejamos visible permanentemente
  $('.bloque').one('mouseenter', function () {
    $(this).find('.contenido').slideDown(400);
  });
});


//Para las animaciones:
$(document).ready(function () {
  $('.bloque .contenido').hide();

  $('.bloque').one('mouseenter', function () {
    $(this).find('.contenido').slideDown(400);

    // Animación para la imagen dependiendo de la posición del bloque
    if ($(this).hasClass('imagen-izquierda')) {
      $(this).find('.imagen').addClass('animate-left');
    } else if ($(this).hasClass('imagen-derecha')) {
      $(this).find('.imagen').addClass('animate-right');
    }
  });
});