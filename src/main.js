import { googleLogIn } from './lib/auth';
import { onNavigate } from './router';

const path = window.location.pathname;
onNavigate(path);

document.getElementById('google-log').addEventListener('click', () => {
  googleLogIn();
});
