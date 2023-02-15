import { login } from './components/login';
import { create } from './components/create';
import { timeline } from './components/timeline';
import { home } from './components/home';

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
  document.getElementById('root').appendChild = routes[pathname];
};
