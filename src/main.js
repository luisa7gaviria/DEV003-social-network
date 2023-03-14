import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { home } from './components/home';
import { create } from './components/create';
import { login } from './components/login';
import { timeline } from './components/timeline';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/crear-cuenta': create,
  '/iniciar-sesion': login,
  '/muro': timeline,
};

export function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[pathname](onNavigate));
}

const component = routes[window.location.pathname](onNavigate);

window.onpopstate = () => {
  rootDiv.replaceChild(routes[window.location.pathname](onNavigate), rootDiv.firstChild);
};

rootDiv.removeChild(rootDiv.firstChild);
rootDiv.appendChild(component);

// detectamos si el usuario está logeado o no
// si el caso es no, redirige a '/'
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.uid);
  } else {
    onNavigate('/');
  }
});
