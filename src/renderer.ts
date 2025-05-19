import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

import './index.css';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');

document.getElementById('button')?.addEventListener('click', () => {
    console.log('Button clicked!');
});