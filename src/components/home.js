export const home = (onNavigate) => {
  const homePage = `

  <img class="gg-logo" src="https://github.com/luisa7gaviria/DEV003-social-network/blob/ramalu/src/Images/logo.png?raw=true">
  <h1> ¡Bienvenido a GGamers!</h1>
  <h2> La red social para los amantes de los videojuegos </h2>
  <button id="log-in-btn"> Iniciar Sesión </button>
  <h4>¿No tienes una cuenta? <span id="go-to-register"> Crea una </span></h4>
  
  <footer>
    <p> Hecho por Luisa Gaviria y Pamela González </p>
  </footer> 
  `;

  const homeSection = document.createElement('section');
  homeSection.innerHTML = homePage;

  homeSection.querySelector('#log-in-btn').addEventListener('click', () => {
    onNavigate('/iniciar-sesion');
  });

  homeSection.querySelector('#go-to-register').addEventListener('click', () => {
    onNavigate('/crear-cuenta');
  });

  return homeSection;
};
