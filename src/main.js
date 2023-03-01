import { onNavigate } from './router';
import { validateLog } from './lib/functions';

const path = window.location.pathname;
onNavigate(path);

validateLog();
