import "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui";
import "../style/master.scss";
import "../style/components/_text-important.scss";
import "./components/instagram-pureJs";

// Initialize components
const App = {
  Widgets: {
    Instagram: new InstagramFeed(),
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

  // Run Instagram feed
  App.Widgets.Instagram.run();
});
