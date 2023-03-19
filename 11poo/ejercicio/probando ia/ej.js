const form = document.querySelector('form');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (usuario.value === '' || contraseña.value === '') {
    alert('Por favor ingrese un usuario y contraseña válidos');
  } else {
    alert('Ingresando...');
    // aquí se podría redirigir a la página de inicio
  }
});