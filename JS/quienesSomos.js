$(document).ready(function () {
  // Mostrar pie de página con animación
  $(".footer").hide().fadeIn(1500);

  // Mostrar secciones al pasar el mouse una sola vez y mantener visibles
  $('.toggle-section').each(function () {
    const $title = $(this);
    const $content = $title.next('.section-content');

    $title.on('mouseenter', function () {
      if (!$content.is(':visible')) {
        $content.stop(true, true).slideDown(300);
        $title.addClass('active');
      }
    });
  });

  // Botón para mostrar/ocultar integrantes (función manual)
  $('#toggle-integrantes').click(function () {
    $('.integrantes').slideToggle(400);
    const texto = $(this).text() === "Mostrar integrantes" ? "Ocultar integrantes" : "Mostrar integrantes";
    $(this).text(texto);
  });

  // Ocultar inicialmente
  $('.section-content, .integrantes').hide();
});
