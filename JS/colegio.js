$(document).ready(function () {
  // Mostrar pie de página con animación
  $(".footer").hide().fadeIn(1500);

  // Scroll suave para enlaces internos
  $("a[href^='#']").on("click", function (event) {
    event.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  // Efecto hover en secciones
  $(".mision, .vision, .alianza").hover(
    function () {
      $(this).css({
        transform: "scale(1.03)",
        transition: "transform 0.3s ease-in-out"
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.3s ease-in-out"
      });
    }
  );

  // Mostrar/Ocultar porcentajes
  $("#toggle-porcentajes").on("click", function () {
    const $contenedor = $("#contenedor-porcentajes");
    const $boton = $(this);

    $contenedor.slideToggle(400);

    // Cambiar texto del botón
    if ($boton.text().includes("Mostrar")) {
      $boton.text("Ocultar Porcentajes");
      // Opcional: hacer scroll automático hasta la leyenda
      $("html, body").animate({
        scrollTop: $contenedor.offset().top - 50
      }, 600);
    } else {
      $boton.text("Mostrar Porcentajes");
    }
  });
});
