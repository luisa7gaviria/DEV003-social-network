import { googleLogIn } from '../lib/auth';
import { onNavigate } from '../router';
import { validateForm } from '../validator';

export const login = () => {
  const createLoginContent = `
  <h1 class="login-t"> INICIAR SESIÓN </h1>
    <form id="logForm"> 

      <div id="group__mail">
        <input id="mail" type="text" name="correo" placeholder="Correo Electrónico"> 
         <p class="form__input-error"> Por favor ingresa una dirección de correo válida. </p>
      </div>

      <div id="group__password">
        <input id="password" type="password" name="contraseña" placeholder="Contraseña">
         <p>¿Olvidaste tu contraseña?</p>
      </div>

      <div>
      <button type="submit" id="enter-button"> Ingresar </button>
      </div>
    </form>
 
    <img class="butongoo" src='Images/btngooglein.png'>

    <button class="back-btn"> Regresar </button> 
    
    <div class="modal"> 
      <div class="modal-content">
        <p> ¡ Ingreso exitoso ! Ya puedes continuar a tu muro</p>
         <img class="continue-by-g" src="Images/homelogo.png">
        </div>
    </div>
      
  `;

  const loginSection = document.createElement('section');
  loginSection.innerHTML = createLoginContent;

  const loginInputs = loginSection.querySelectorAll('#logForm input');

  loginInputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validateForm(e.target);
    });
  });

  const logForm = loginSection.querySelector('#logForm');

  logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('kask inicio');
  });

  loginSection.querySelector('.butongoo').addEventListener('click', () => {
    googleLogIn()
      .then(() => {
        console.log('ingreso exitoso');
        loginSection.querySelector('.modal').classList.add('success-modal');
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
