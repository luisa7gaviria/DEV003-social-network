import { login } from "./login.js";
import { create } from "./create.js";
import { timeline } from "./timeline.js";

const routes =
{
  home: '/Bienvenida',

  login: '/Iniciar-Sesion',

  createAcc: '/Crear-Cuenta'
};

console.log(routes);

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  )
  document.getElementById('root').innerHTML = routes[pathname];
};





