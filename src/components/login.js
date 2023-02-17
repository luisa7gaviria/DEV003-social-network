import { googleLogIn } from '../lib/auth';
import { onNavigate } from "../router";

export const login = () => {
  const createLoginContent = `
  <h1 class="login-t"> INICIAR SESIÓN </h1>
    <form id="logForm"> 
      <input id="inputMail" type="text" name="correo" placeholder="Correo Electrónico"> 
      <input id="inputPass" type="password" name="contraseña" placeholder="Contraseña">
      <p>¿Olvidaste tu contraseña?</p>
      <div>
      <button type="submit" id="enter-button"> Ingresar </button>
      </div>
    </form>
 
    <img class="butongoo" src='Images/btngooglein.png'>

    <button class="back-btn"> Regresar </button> 
 
   <div class="sucess-modal"> 
      <p> ¡ Ingreso exitoso ! </p>
      <img class="continue-by-g" src="Images/homelogo.png">
    </div>
  `;

  const loginSection = document.createElement('section');
  loginSection.innerHTML = createLoginContent;

  const logForm = loginSection.querySelector('#logForm');

  logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('kask inicio');
  });

  loginSection.querySelector('.butongoo').addEventListener('click', () => {
    googleLogIn()
      .then(() => {
        console.log('ingreso exitoso');
        loginSection.querySelector('.sucess-modal').style.display = 'block';
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
