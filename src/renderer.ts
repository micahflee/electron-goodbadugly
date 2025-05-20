import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

import './index.css';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');

document.getElementById('button')?.addEventListener('click', () => {
    console.log('Button clicked!');

    // UGLY: typescript doesn't know about the electron global, and I don't know a good
    // way to tell it about it without lots of duplicate code

    // @ts-expect-error ugly
    window.electron.popCalc();
});
