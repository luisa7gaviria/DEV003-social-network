import { onNavigate } from './router';

import { myFunction } from './lib/index.js';

myFunction();

const path = window.location.pathname;
onNavigate(path);
