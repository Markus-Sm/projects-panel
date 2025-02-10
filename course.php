<?php 
$pageTitle = "Course Symfony";
$pageKey = "course";
include "inc/header.inc.php";
?>

<div>
    <h1><?php echo $pageTitle; ?></h1>

    <?php
        $uri = $_SERVER['REQUEST_URI'];
        $foo = $_GET['foo'] ?? null;
    ?>

</div>

<?php 
include "inc/footer.inc.php";
?>

