function validarFormulario() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
  
    // Validación del nombre de usuario
    if (username.value.trim() == "") {
      alert("Por favor ingresa tu nombre de usuario.");
      username.focus();
      return false;
    }
  
    // Validación de la contraseña
    if (password.value.trim() == "") {
      alert("Por favor ingresa tu contraseña.");
      password.focus();
      return false;
    }
  
    // Validación del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      alert("Por favor ingresa un correo electrónico válido.");
      email.focus();
      return false;
    }
  
    // Validación de la contraseña para que tenga al menos una letra y un número
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(password.value.trim())) {
      alert("La contraseña debe contener al menos una letra y un número, y tener una longitud mínima de 6 caracteres.");
      password.focus();
      return false;
    }
  
    return true;
  }