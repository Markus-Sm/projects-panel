<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel projektów <?php if(!empty($pageTitle)): ?> &bull; <?php echo $pageTitle; ?><?php endif; ?> </title>
    
    <!-- Style -->
    <link rel="stylesheet" href="dist/main.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin=""/>

    <!-- Scripts -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    crossorigin=""></script>
    <script defer src="dist/main.bundle.js"></script>

</head>
<body>
    <nav class="main-nav">
        <ul>
            <li><a href="index.php" class="<?php echo $pageKey === "home" ? "active" : "" ?>">Strona główna</a></li>
            <li><a href="contact.php" class="<?php echo $pageKey === "contact" ? "active" : "" ?>">Kontakt</a></li>
            <li><a href="about.php" class="<?php echo $pageKey === "about" ? "active" : "" ?>">O projekcie</a></li>
            <li><a href="course.php" class="<?php echo $pageKey === "course" ? "active" : "" ?>">Course Symfony</a></li>
        </ul>
        <button id="theme-toggle"></button>
    </nav>
    
    <main id="main">