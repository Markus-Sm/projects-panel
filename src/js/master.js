import "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui";

// Import wszystkich komponentów
import "./components/instagram-pureJs";
import ThemeToggle from "./classes/toggleTheme";

// Initialize components
const App = {
  init() {
    console.log("App initialized");
    // Initialize theme toggle
    const themeToggle = new ThemeToggle('#theme-toggle');
    themeToggle.init();
  },
};

// Make App global
window.App = App;

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
