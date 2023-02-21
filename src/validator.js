import { campos } from "./components/create"; 

const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  password: /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,16}$/,
  correo: /^\w.+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/,
};

const validarCampo = (expresion, inputext, campo) => {
  if (expresion.test((inputext.value))) {
    document.querySelector(`#${campo}`).classList.add('correct-input');
    document.querySelector(`#${campo}`).classList.remove('incorrect-input');
    document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-activo');
    campos[campo] = true;
  } else {
    document.querySelector(`#${campo}`).classList.remove('correct-input');
    document.querySelector(`#${campo}`).classList.add('incorrect-input');
    document.querySelector(`#group__${campo} .form__input-error`).classList.add('form__input-error-activo');
    campos[campo] = false;
  }
  if (inputext.value === '') {
    document.querySelector(`#group__${campo} .form__input-error`).classList.remove('form__input-error-activo');
  }
};

export const validateForm = (input) => {
  switch (input.name) {
    case 'nombre':
      validarCampo(expresiones.usuario, input, 'name');
      break;

    case 'correo':
      validarCampo(expresiones.correo, input, 'mail');
      break;

    case 'contraseña':
      validarCampo(expresiones.password, input, 'password');
      break;

    case 'contraseña2':
      validarCampo(expresiones.password, input, 'passwordtwo');
      break;

    // no default
  }
};
