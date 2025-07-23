document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;

  // Guardar que el usuario ya se registró
  sessionStorage.setItem('usuarioRegistrado', 'true');
  sessionStorage.setItem('nombreUsuario', username); // Guarda el nombre

  // Redirigir a la página principal
  window.location.href = '../BullyingCero.html'; // o ajusta según tu estructura real
});
