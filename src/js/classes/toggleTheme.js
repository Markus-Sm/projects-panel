console.log("Toggle theme loaded");

export default class ThemeToggle {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error('Theme toggle container not found:', containerSelector);
            return;
        }
        this.currentTheme = localStorage.getItem('theme') || 'light';
    }

    init() {
        this.applyTheme();
        this.container.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }
}