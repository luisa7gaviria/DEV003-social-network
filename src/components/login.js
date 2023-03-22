import { googleLogIn, logAcc } from '../lib/functions';
import { inputStatus, validateLoginForm } from '../validator/validator';

export const login = (onNavigate) => {
  const createLoginContent = `
  <h1 class="login-t"> INICIAR SESIÓN </h1>
    <form id="logForm"> 

      <div id="group__mail">
        <input id="mail" type="text" name="correo" placeholder="Correo Electrónico" maxlength="50"> 
         <p class="form__input-error"> Por favor ingresa una dirección de correo válida.</p>
      </div>

      <div class="group-pass" id="group__password">
        <input id="password" type="password" name="contraseña" placeholder="Contraseña" maxlength="16">
        <p class="form__input-error"> Digita de 8 a 16 carácteres incluyendo mayúsculas, minúsculas, <br> números y algún carácter especial sin espacios.</p>
        <img src="https://github.com/luisa7gaviria/DEV003-social-network/blob/ramalu/src/Images/ojo.png?raw=true" class="showPassword">
        </div>

      <div>
      <button type="submit" id="enter-button"> Ingresar </button>
      </div>
    </form>
 
    <img class="butongoo" src='https://github.com/luisa7gaviria/DEV003-social-network/blob/ramalu/src/Images/btngooglein.png?raw=true'>

    <button class="back-btn"> Regresar </button> 
    
    <div class="modal"> 
      <div class="modal-content">
        <p id="successLogin">¡ Ingreso exitoso ! Ya puedes continuar a tu muro</p>
         <img class="continue-by-g" src="https://github.com/luisa7gaviria/DEV003-social-network/blob/ramalu/src/Images/homelogo.png?raw=true">
        </div>
    </div>
      
  `;

  const loginSection = document.createElement('section');
  loginSection.innerHTML = createLoginContent;

  const loginInputs = loginSection.querySelectorAll('#logForm input');
  const iLogMail = loginSection.querySelector('#mail');
  const iLogPassword = loginSection.querySelector('#password');

  loginInputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validateLoginForm(e.target);
    });
  });

  const showP = loginSection.querySelector('.showPassword');
  let click = false;

  showP.addEventListener('click', () => {
    if (!click) {
      iLogPassword.type = 'text';
      click = true;
    } else if (click) {
      iLogPassword.type = 'password';
      click = false;
    }
  });

  const logForm = loginSection.querySelector('#logForm');

  logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputStatus.mail && inputStatus.password) {
      logAcc(iLogMail.value, iLogPassword.value)
        .then(() => {
          loginSection.querySelector('.modal').classList.add('success-modal');
          logForm.reset();
        })
        .catch(() => {
          alert('Dirección de correo o contraseña incorrectos, inténtalo de nuevo.');
        });
    }
  });

  loginSection.querySelector('.butongoo').addEventListener('click', () => {
    googleLogIn()
      .then(() => {
        onNavigate('/muro');
      });
  });

  loginSection.querySelector('.continue-by-g').addEventListener('click', () => {
    onNavigate('/muro');
  });

  loginSection.querySelector('.back-btn').addEventListener('click', () => {
    onNavigate('/');
  });

  return loginSection;
};
