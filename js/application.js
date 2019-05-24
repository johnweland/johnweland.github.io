import Navmenu from './menu.js';

'use strict';
if (window.navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/serviceworker.js')
          .catch(error => console.log(`Service Worker: Error: ${error}`));
    })
}
const nav = new Navmenu;
nav.btn.addEventListener('click', nav.toggle);
if (!nav.btn.length) {
    Object.keys(nav.items).map(item => nav.items[item].classList.add('show'));
}