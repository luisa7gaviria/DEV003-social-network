const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/,
  correo: /^\w+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,
};
const validarCampo = (expresion, input) => expresion.test(input.value);

export const validateForm = (input) => {
  switch (input.name) {
    case 'nombre':
      validarCampo(expresiones.usuario, input);
      break;

    case 'correo':
      validarCampo(expresiones.correo, input);
      break;

    case 'contraseña':
      validarCampo(expresiones.password, input);
      break;

    case 'contraseña2':
      validarCampo(expresiones.password, input);
      break;

    // no default
  }
  return validarCampo;
};
