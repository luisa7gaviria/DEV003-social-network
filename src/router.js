import { Login } from './components/login';
// eslint-disable-next-line import/no-cycle
import { Create } from './components/create';
import { Timeline } from './components/timeline';
import { Home } from './components/home';

const routes = {
  '/': Home(),
  '/crear-cuenta': Create(),
  '/iniciar-sesion': Login(),
  '/muro': Timeline(),
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  document.getElementById('root').appendChild = routes[pathname];
};
