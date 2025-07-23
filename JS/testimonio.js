document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('testimonio');
  const select = document.getElementById('colegio-select');
  const boton = document.getElementById('btn-enviar');
  const mensaje = document.getElementById('mensaje-testimonio');
  const listaTestimonios = document.getElementById('lista-testimonios');

  // Verifica si el usuario se ha registrado (o iniciado sesión)
  const usuarioAutenticado = sessionStorage.getItem('usuarioRegistrado') === 'true';

  if (!usuarioAutenticado) {
    textarea.disabled = true;
    select.disabled = true;
    boton.disabled = true;
    mensaje.textContent = 'Debes iniciar sesión o registrarte para enviar un testimonio.';
    mensaje.style.color = 'red';
    return;
  }

  // Evento para enviar testimonio si está autenticado
  boton.addEventListener('click', () => {
    const colegio = select.value.trim();
    const texto = textarea.value.trim();

    if (!colegio || !texto) {
      mensaje.textContent = 'Por favor, completa todos los campos.';
      mensaje.style.color = 'red';
      return;
    }

    // Crear nuevo testimonio
    const nuevoTestimonio = document.createElement('li');
    nuevoTestimonio.innerHTML = `<strong>Anónimo (${colegio}):</strong> ${texto}`;
    listaTestimonios.appendChild(nuevoTestimonio);

    // Limpiar campos
    select.value = '';
    textarea.value = '';
    mensaje.textContent = 'Tu testimonio fue enviado correctamente.';
    mensaje.style.color = 'green';
  });
});
