<?php 
$pageTitle = "Course Symfony";
$pageKey = "course";
include "inc/header.inc.php";
?>

<div style="padding: 30px 40px;">
    <h1><?php echo $pageTitle; ?></h1>

    <?php
require_once __DIR__ . '/vendor/autoload.php'; 

use Symfony\Component\HttpFoundation\Response;


        $uri = $_SERVER['REQUEST_URI'];
        $foo = $_GET['id'] ?? null;

        // prepate response 
        $response = new Response();

        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'text/html');
        echo $response;

        $response->send();
    ?>

</div>

<?php 
include "inc/footer.inc.php";
?>

