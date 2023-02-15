export const Create = () => {
  const createComponentContent = `
  <h1>CREAR CUENTA</h1>
  <form id="createForm">
    <input id= "userName" type="text" placeholder="Nombre" > 
    <input id= "userMail" type="email" placeholder="Correo Electrónico">
    <input id= "userPassword" type="password" placeholder="Contraseña">
    <input id= "userConfirm" type="password" placeholder="Confirma tu contraseña">
    <input type="submit" id="createAcc"> Crear 
  </form>
  `;

  const section = document.createElement('section');
  section.innerHTML = createComponentContent;

  const myForm = section.querySelector('#createForm');

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  return section;
};
