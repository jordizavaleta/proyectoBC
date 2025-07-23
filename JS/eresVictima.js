$(document).ready(function () {
  //Animación para mostrar pie de página lentamente
  $(".footer").hide().fadeIn(1500);
});


//JQUERY
$(document).ready(function () {
  // 1. Animación al hacer scroll (fade in)
  $('.info, .imagen, .video-section').css('opacity', 0);

  $(window).on('scroll', function () {
    $('.info, .imagen, .video-section').each(function () {
      if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
        $(this).animate({ opacity: 1 }, 700);
      }
    });
  }).trigger('scroll');

  // 2. Hover animado en las secciones info
  $('.info').hover(
    function () {
      $(this).css({
        'transform': 'scale(1.02)',
        'transition': 'transform 0.3s ease-in-out',
        'box-shadow': '0 8px 20px rgba(0,0,0,0.2)'
      });
    },
    function () {
      $(this).css({
        'transform': 'scale(1)',
        'box-shadow': '0 4px 12px rgba(0, 0, 0, 0.1)'
      });
    }
  );

  // 3. Tooltip informativo en frases clave
  $('[data-tooltip]').each(function () {
    const tooltipText = $(this).attr('data-tooltip');
    $(this).hover(function (e) {
      $('body').append(`<div class="tooltip">${tooltipText}</div>`);
      $('.tooltip')
        .css({
          top: e.pageY + 10,
          left: e.pageX + 10
        })
        .fadeIn(200);
    }, function () {
      $('.tooltip').remove();
    });

    $(this).mousemove(function (e) {
      $('.tooltip').css({
        top: e.pageY + 10,
        left: e.pageX + 10
      });
    });
  });

  // 4. Botón volver arriba visible con animación
  $('body').append(`
    <a href="#" id="volver-arriba" style="
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--color-primario);
      color: white;
      padding: 12px 16px;
      border-radius: 50%;
      display: none;
      text-decoration: none;
      font-size: 24px;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    ">↑</a>
  `);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#volver-arriba').fadeIn();
    } else {
      $('#volver-arriba').fadeOut();
    }
  });

  $('#volver-arriba').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  // 5. Animación del título principal con rebote
  $('#titulo').hide().fadeIn(1000).effect("bounce", { times: 2 }, 400);

  // 6. Enlaces con animación suave al navegar a otra sección
  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    const destino = $($(this).attr("href"));
    if (destino.length) {
      $("html, body").animate({
        scrollTop: destino.offset().top - 80
      }, 700);
    }
  });
});

