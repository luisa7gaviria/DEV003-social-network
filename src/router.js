import { home } from './components/home';
import { create } from './components/create';
import { login } from './components/login';
import { timeline } from './components/timeline';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home(),
  '/crear-cuenta': create(),
  '/iniciar-sesion': login(),
  '/muro': timeline(),
};

window.onpopstate = () => {
  rootDiv.replaceChild(routes[window.location.pathname], rootDiv.firstChild);
};

window.onload = () => {
  rootDiv.replaceChild(routes[window.location.pathname], rootDiv.firstChild);
};
