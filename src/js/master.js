import "../style/master.scss";
import "../style/components/_text-important.scss";
import "jquery-ui-dist/jquery-ui.css";
import "jquery-ui";

// $(document).ready(function () {
//   console.log("jQuery and jQuery UI are working!");

//   // Przykład użycia jQuery UI - dodajmy efekt draggable do nagłówka
//   $(".plain-header__box").draggable();
// });

$(document).ready(function () {
  $(".plain-header__box").draggable();
});
