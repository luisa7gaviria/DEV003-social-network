export const login = ` 
<h1 class="login-t"> INICIAR SESIÓN </h1>
<form id="logForm"> 
  <input type="email" placeholder="Correo Electrónico"> 
  <input type="password" placeholder="Contraseña">
  <p>¿Olvidaste tu contraseña?</p>
  <button id="enter-button"> <a href="/muro">Ingresar </a></button>
</form>
 
 <button id="google-in"> Continúa con Google </button>
 <a href="/"> <button class="back-btn"> Regresar </button> </a>
 
 <div class="sucess-modal"> 
    <p> ¡ Ingreso exitoso ! </p>
    <a href='/muro'><img src="Images/homelogo.png"></a>
  </div>
`;

export function showModal() {
  document.querySelector('.sucess-modal').style.display = 'block';
}
