console.log("Instagram loaded");

let domainUrl = "https://graph.instagram.com/me/media?";
let fields = "fields=media_url";
var access_token =
  "IGQVJVV2xnd3VqNWFLaUxXVXNUSTVtQko4WVNjMXdiSS1tNkZA0YUtxSndDYk9SNkZA0RkNhZA0xRdEFwbkVLdnY1eVkxRE5MLXdzTFlnbDlmdWhlNWJ2VUdlNnpTOFRFZAW9FU1lSU041WjNMaXJqX1p3aAZDZD";

var fullUrl = domainUrl + fields + "&access_token=" + access_token;

console.log(fullUrl);

// fetch(fullUrl)
//   .then((response) => response.json())
//   .then((dataArray) => {
//     dataArray.data.forEach((element) => {
//       document.querySelector(".grid-gallery").innerHTML += `
//         <li>
//           <a class="grid-gallery__item" style="background-image: url('${element.media_url}');" href="${element.permalink}" title="${element.caption}" target="_blank"></a>
//         </li>
//       `;
//     });
//   });

// fetch(fullUrl)
//   .then((response) => response.json())
//   .then((dataArray) => {
//     const gallery = document.querySelector(".grid-gallery");
//     dataArray.data.forEach((element) => {
//       gallery.insertAdjacentHTML(
//         "beforeend",
//         `
//     <li>
//       <a class="grid-gallery__item"
//          style="background-image: url('${element.media_url}');"
//          href="${element.permalink}"
//          title="${element.caption || ""}"
//          target="_blank">
//       </a>
//     </li>
//   `
//       );
//     });
//   });

/* =====  Error handling ====  */

fetch(fullUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`MAREK MESSAGE Błąd: ${response.statusText}`);
    }
    return response.json();
  })
  .then((dataArray) => {
    if (dataArray.data) {
      dataArray.data.forEach((element) => {
        document.querySelector(".grid-gallery").insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <a class="grid-gallery__item"
               style="background-image: url('${element.media_url}');"
               href="${element.permalink}"
               title="${element.caption || ""}"
               target="_blank">
            </a>
          </li>
        `
        );
      });
    }
  })
  .catch((error) => console.error("Wystąpił błąd:", error));
