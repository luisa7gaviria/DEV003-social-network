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
  rootDiv.replaceChild(routes[pathname](onNavigate), rootDiv.firstChild);
}

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.replaceChild(component, rootDiv.firstChild);
};

rootDiv.replaceChild(component(onNavigate), rootDiv.firstChild);

// detectamos si el usuario está logeado o no
// si el caso es no, redirige a '/'
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
  } else {
    onNavigate('/');
    console.log('user is out');
  }
});
