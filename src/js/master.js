import "jquery";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui-dist/jquery-ui";
import "../style/master.scss";
import "../style/components/_text-important.scss";
import "../style/components/_instagram-feed.scss";
// import { InstagramFeed } from "./components/myInst";

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
