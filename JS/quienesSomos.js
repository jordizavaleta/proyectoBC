//JQUERY
$(document).ready(function () {
  //Animación para mostrar pie de página lentamente
  $(".footer").hide().fadeIn(1500);
});

$(document).ready(function() {
  // Al hacer click en los títulos .toggle-section, plegar o desplegar su contenido
  $('.toggle-section').click(function() {
    $(this).next('.section-content').slideToggle(400);
    $(this).toggleClass('active');
  });

  // Botón para mostrar/ocultar integrantes
  $('#toggle-integrantes').click(function() {
    $('.integrantes').slideToggle(400);
    const texto = $(this).text() === "Mostrar integrantes" ? "Ocultar integrantes" : "Mostrar integrantes";
    $(this).text(texto);
  });

  // Ocultamos todas las secciones plegables
  $('.section-content').hide();
});
