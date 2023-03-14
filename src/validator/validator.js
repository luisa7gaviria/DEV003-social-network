const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/,
  correo: /^\w.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,
};
export const inputStatus = {

  mail: false,
  password: false,
};

export const validarCampo = (expresion, inputext, campo) => {
  if (expresion.test(inputext.value)) {
    document.querySelector(`#${campo}`).classList.replace('incorrect-input', 'correct-input');
    document.querySelector(`#group__${campo} p`).classList.replace('form__input-error-activo', 'form__input-error');
    inputStatus[campo] = true;
  } else {
    document.querySelector(`#${campo}`).classList.add('incorrect-input');
    document.querySelector(`#group__${campo} p`).classList.add('form__input-error-activo');
    inputStatus[campo] = false;
  }
};

export const validateCreateForm = (input) => {
  switch (input.name) {
    case 'correo':
      validarCampo(expresiones.correo, input, 'mail');
      break;

    case 'contraseña':
      validarCampo(expresiones.password, input, 'password');
      break;

    case 'passwordtwo':
      validarCampo(expresiones.password, input, 'passwordtwo');
      break;

    // no default
  }
};
export const validateLoginForm = (input) => {
  switch (input.name) {
    case 'correo':
      validarCampo(expresiones.correo, input, 'mail');
      break;

    case 'contraseña':
      validarCampo(expresiones.password, input, 'password');
      break;
      // no default
  }
};
