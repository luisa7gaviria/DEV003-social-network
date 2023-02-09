import { onNavigate } from './components/router.js'

import { myFunction } from './lib/index.js';

myFunction();


document.getElementById('log-in-btn').addEventListener("click", () => {
  console.log(onNavigate("/Iniciar-Sesion"));
});
