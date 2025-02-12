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
<?php
require_once __DIR__ . '/vendor/autoload.php'; 

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

        $request = Request::createFromGlobals();
        $uri = $request->getPathInfo();

        if(in_array($uri, ['', '/'])){
            $response = new Response("This is home page!");
        }elseif($uri === '/about.php'){
            $response = new Response("This is a contact page!");
        }elseif($uri === '/course.php'){
            $response = new Response("This is a course page!");
        }elseif($uri === '/contact.php'){
            $response = new Response("This is a contact page!");
        }else {
            $response = new Response('Not found', Response::HTTP_NOT_FOUND);
        }

        $response->send();
    ?>