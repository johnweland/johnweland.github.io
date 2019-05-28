import Navmenu from './menu.js';
import LazyLoadImages from './lazy-load-images.js';
//import ClipboardJS from './clipboard.min.js';

'use strict';
if (window.navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/serviceworker.js')
          .catch(error => console.log(`Service Worker: Error: ${error}`));
    })
}
LazyLoadImages.init();
$(document).ready(() => {
    const nav = new Navmenu;
    nav.btn.addEventListener('click', nav.toggle);
    if (!nav.btn.length) {
        Object.keys(nav.items).map(item => nav.items[item].classList.add('show'));
    }

    $('.highlight').each(function(i) {
        if (!$(this).parent().hasClass('no-select-button')) {
            let currentId = "codeblock" + (i + 1);
            let codeSection = $(this).find('code');
            codeSection.attr('id', currentId);
            let btn = document.createElement('a');
            btn.setAttribute('type', 'btn');
            btn.setAttribute('class', 'btn-copy-code');
            btn.setAttribute('data-clipboard-target', '#' + currentId);
            btn.innerHTML = '<i class="far fa-copy"></i> copy to clipboard';
            this.insertBefore(btn, this.firstChild);
        }
    });
    new ClipboardJS('.btn-copy-code');
});