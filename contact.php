<?php 
$pageTitle = "Kontakt";
$pageKey = "contact";
include "inc/header.inc.php";
?>

    <section class="contact-container">
        <h1>Kontakt</h1>
        <div class="contact-form">
            <form id="contactForm">
                <div class="form-group">
                    <label for="name">Imię i nazwisko:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Wiadomość:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                    
                    <button type="submit" class="btn-submit">Wyślij wiadomość</button>
            </form>
        </div>
        </section>
        <section class="map-container">
        
    </section>

<?php 
include "inc/footer.inc.php";
?>
