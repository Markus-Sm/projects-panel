import "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui";
import "./components/instagram-pureJs";

// Initialize components
const App = {
  Widgets: {
    Instagram: null, // Will be initialized after DOM is ready
  },
};

// Make App global
window.App = App;

$(document).ready(function () {
  // Initialize draggable
  $(".sub, p").draggable({
    containment: "#main",
    cancel: "#sub2",
  });
});
