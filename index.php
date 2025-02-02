<?php 
$pageTitle = "Strona główna";
$pageKey = "home";
include "inc/header.inc.php";
?>

    <div id="main">
      <div id="user-container"></div>

      <div class="grid-gallery">
        <ul id="instagram-feed" class="grid-gallery__list">
          <li>
            <a
              class="grid-gallery__item"
              style="
                background-image: url('https://cdn.pixabay.com/photo/2024/12/25/03/57/newborn-photography-9289496_1280.jpg');
              "
              href="https://cdn.pixabay.com/photo/2024/12/25/03/57/newborn-photography-9289496_1280.jpg"
              title="Newborn photography by @marek.marek"
              target="_blank"
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <script type="module" src="src/js/data.js"></script>

<?php 
include "inc/footer.inc.php";
?>
