import "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui";

// Import wszystkich komponentów
import "./components/instagram-pureJs";
import "./classes/toggleTheme";

// Initialize components
const App = {
  init() {
    console.log("App initialized");
  },
};

// Make App global
window.App = App;

$(document).ready(function () {
  // Initialize draggable
  $(".sub, p").draggable({
    containment: "parent",
  });

  App.init();
});
