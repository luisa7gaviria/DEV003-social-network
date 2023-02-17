import { onNavigate } from '../router';
import { validateForm } from '../validator';

export const create = () => {
  const createComponentContent = `
  <h1 class="create-t">CREAR CUENTA</h1>
  <form id="createForm">
    <input id= "userName" type="text" name="nombre" placeholder="Nombre" maxlength="16" > 
    <input id= "userMail" type="text" name="correo" placeholder="Correo Electrónico" maxlength="50" >
    <input id= "userPassword" type="password" name="contraseña" placeholder="Contraseña" maxlength="16">
    <input id= "userConfirm" type="password" name="contraseña2" placeholder="Confirma tu contraseña" maxlength="16" >
    <div > 
    <button type="submit" id="createAcc" > Crear </button>
    </div>
    
  </form>
  <button class="back-btn"> Regresar </button>
  `;

  const section = document.createElement('section');
  section.innerHTML = createComponentContent;

  const myForm = section.querySelector('#createForm');
  const inputs = section.querySelectorAll('#createForm input');
  const input1 = section.querySelector('#userPassword');
  const input2 = section.querySelector('#userConfirm');

  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validateForm(e.target);
      console.log(validateForm(e.target));
    });
  });

  const validatePassword = () => {
    if (input1.value !== input2.value) {
      console.log('no son iguale');
    } else {
      console.log('si son iguale');
    }
  };

  input1.addEventListener('keyup', () => {
    validatePassword();
  });
  input2.addEventListener('keyup', () => {
    validatePassword();
  });

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  section.querySelector('.back-btn').addEventListener('click', () => {
    onNavigate('/');
  });

  return section;
};
