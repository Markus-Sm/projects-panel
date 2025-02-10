<?php 
$pageTitle = "Course Symfony";
$pageKey = "course";
include "inc/header.inc.php";
?>

<div style="padding: 30px 40px;">
    <h1><?php echo $pageTitle; ?></h1>

    <?php
        $uri = $_SERVER['REQUEST_URI'];
        $foo = $_GET['id'] ?? null;

        // write response 
        echo "The URI request is: <pre>$uri</pre><br>\n";

        echo "The value of the <pre>$pageKey</pre> parameter is: <pre>$foo</pre>";
    ?>

</div>

<?php 
include "inc/footer.inc.php";
?>

