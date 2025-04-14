export default class ThemeToggle {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) {
            console.error('Theme toggle container not found:', containerSelector);
            return;
        }
        this.currentTheme = localStorage.getItem('theme') || 'light';
        console.log('Initial theme:', this.currentTheme);
    }

    init() {
        this.applyTheme();
        this.container.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        console.log('Toggling theme to:', this.currentTheme);
        this.applyTheme();
    }

    applyTheme() {
        console.log('Applying theme:', this.currentTheme);
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        // Sprawdzamy, czy atrybut został faktycznie ustawiony
        const currentTheme = document.documentElement.getAttribute('data-theme');
        console.log('Current data-theme attribute:', currentTheme);
    }
}
