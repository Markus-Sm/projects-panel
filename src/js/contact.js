document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Tutaj możesz dodać kod do wysyłania formularza
    // na przykład poprzez fetch do twojego API
    console.log("Dane formularza:", formData);

    // Przykład wysyłki (zakomentowany)
    /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Wiadomość została wysłana!');
                contactForm.reset();
            } else {
                alert('Wystąpił błąd podczas wysyłania wiadomości.');
            }
        } catch (error) {
            console.error('Błąd:', error);
            alert('Wystąpił błąd podczas wysyłania wiadomości.');
        }
        */

    // Tymczasowo - tylko wyświetl alert
    alert("Dziękujemy za wiadomość! (to jest wersja demonstracyjna)");
    contactForm.reset();
  });
});

/* =============== */
/* ===== MAP ===== */
/* =============== */

var map = L.map("map");

// // Ustawienie widoku na Łódź, Piotrkowska 82
map.setView([51.7657, 19.4559], 15);

// Dodanie markera dla Piotrkowskiej 82
L.marker([51.7657, 19.4559])
  .addTo(map)
  .bindPopup("Piotrkowska 82, Łódź", {
    offset: [0, 125],
    className: "popup-bottom",
    autoPanPadding: [50, 50],
  })
  .openPopup();

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Zakomentowana geolokalizacja

// navigator.geolocation.watchPosition(success, error);

// let marker, circle, zoomed;

// function success(pos) {
//   const lat = pos.coords.latitude;
//   const lng = pos.coords.longitude;
//   const accuracy = pos.coords.accuracy;

//   if (marker) {
//     map.removeLayer(marker);
//     map.removeLayer(circle);
//   }

//   marker = L.marker([lat, lng]).addTo(map);
//   circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

//   if (!zoomed) {
//     map.fitBounds(circle.getBounds());
//   }

//   map.setView([lat, lng], 13);
// }

// function error(err) {
//   if (err.code === 1) {
//     alert("Please allow access to your location.");
//   } else {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
// }
