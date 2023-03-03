import onNavigate from '../onNavigate';
import { validateForm } from '../validator';
import { createAccount } from '../lib/auth';

export const campos = {
  name: false,
  mail: false,
  password: false,
};

export const create = () => {
  const createComponentContent = `
  <h1 class="create-t">CREAR CUENTA</h1>
  <form id="createForm">

   <div id="group__name">
     <input id= "name" type="text" name="nombre" placeholder="Nombre" maxlength="16" > 
     <p class="form__input-error" > Este campo solo permite letras y números <br> con un máximo de 16 carácteres. </p>
    </div>

    <div id="group__mail">
     <input id= "mail" type="text" name="correo" placeholder="Correo Electrónico" maxlength="50" >
     <p class="form__input-error"> Por favor ingresa una dirección de correo válida. </p>
    </div>

      <div id="group__password" class="group-pass"> 
         <input id= "password" type="password" name="contraseña" placeholder="Contraseña" maxlength="16">
         <p class="form__input-error"> Digita de 8 a 16 carácteres incluyendo mayúsculas, minúsculas, números y algún carácter especial sin espacios. </p>
         <img src="Images/ojof.png" class="showPassword">
         </div>
    
     <div id="group__passwordtwo" class="group-pass">
       <input id= "passwordtwo" type="password" name="contraseña2" placeholder="Confirma tu contraseña" maxlength="16">
       <p class="form__input-error"> Las contraseñas deben ser iguales </p>
     </div>

     <div class="button-create">
       <button type="submit" id="createAcc" > Crear </button>x
     </div>

  </form>
  <button class="back-btn"> Regresar </button>

  <div class="modal"> 
      <div class="modal-content">
        <p> Tu usuario ha sido creado <br> Gracias por registrarte en GGamers</p>
         <img class="continue-by-g" src="Images/homelogo.png">
        </div>
    </div>

  `;

  const section = document.createElement('section');
  section.innerHTML = createComponentContent;

  const myForm = section.querySelector('#createForm');
  const inputs = section.querySelectorAll('#createForm input');
  const mailInput = section.querySelector('#mail');
  const input1 = section.querySelector('#password');
  const input2 = section.querySelector('#passwordtwo');

  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validateForm(e.target);
      // if(validateForm(e.target);){
      //   // poner el color
      // }else {
      //   // quitar el color 
      // }
    });
  });

  const validatePassword = () => {
    if (input1.value !== input2.value) {
      section.querySelector('#group__passwordtwo .form__input-error').classList.add('form__input-error-activo');
    } else {
      section.querySelector('#group__passwordtwo .form__input-error').classList.remove('form__input-error-activo');
    }
  };

  input1.addEventListener('keyup', () => {
    validatePassword();
  });
  input2.addEventListener('keyup', () => {
    validatePassword();
  });

  const showPas = section.querySelector('.showPassword');
  let click = false;

  showPas.addEventListener('click', () => {
    if (!click) {
      input1.type = 'text';
      input2.type = 'text';
      click = true;
    } else if (click) {
      input1.type = 'password';
      input2.type = 'password';
      click = false;
    }
  });

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.name && campos.mail && campos.password) {
      createAccount(mailInput.value, input1.value)
        .then(() => {
          console.log('se creó');
          section.querySelector('.modal').classList.add('success-modal');
        })
        .catch(() => {
          alert('Este correo ya está en uso.');
        });
    }
  });

  section.querySelector('.continue-by-g').addEventListener('click', () => {
    onNavigate('/muro');
  });

  section.querySelector('.back-btn').addEventListener('click', () => {
    onNavigate('/');
  });

  return section;
};


export const  x = 5