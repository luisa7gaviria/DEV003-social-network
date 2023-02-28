import { home } from './components/home';
import { create, x } from './components/create';
import { login } from './components/login';
import { timeline } from './components/timeline';

console.log(create, x)

//const create = () => null
const rootDiv = document.getElementById('root');

const routes = {
  '/': home(),
  '/crear-cuenta': create(),
  '/iniciar-sesion': login(),
  '/muro': timeline(),
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.replaceChild(routes[pathname], rootDiv.firstChild);
};

window.onpopstate = () => {
  rootDiv.replaceChild(routes[window.location.pathname], rootDiv.firstChild);
};
