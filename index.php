<?php 
$pageTitle = "Strona główna";
$pageKey = "home";
include "inc/header.inc.php";
?>

    <div id="main">
      <div id="user-container"></div>

      <div class="grid-gallery">
        <ul id="instagram-feed" class="grid-gallery__list"></ul>
      </div>
    </div>
    <script type="module" src="src/js/data.js"></script>

<?php 
include "inc/footer.inc.php";
?>
