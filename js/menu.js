
export default class Navmenu {
    constructor () {
        this.btn = document.querySelector('.menu__btn'),
        this.menu = document.querySelector('.menu'),
        this.branding = document.querySelector('.menu__branding'),
        this.nav = document.querySelector('.menu__nav'),
        this.items = document.querySelectorAll('.nav__item'),
        this.state = false,
        this.toggle = () => {
            if (!this.state) {
                this.btn.classList.add('close');
                this.menu.classList.add('show');
                this.branding.classList.add('show');
                this.nav.classList.add('show');
                Object.keys(this.items).map(item => this.items[item].classList.add('show'));
                this.state = true;
            } else {
                this.btn.classList.remove('close');
                this.menu.classList.remove('show');
                this.branding.classList.remove('show');
                this.nav.classList.remove('show');
                Object.keys(this.items).map(item => this.items[item].classList.remove('show'));
                this.state = false;
            }
        }
    }
}
