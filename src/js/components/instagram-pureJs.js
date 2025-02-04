console.log("Instagram loaded");

let domainUrl = "https://graph.instagram.com/me/media?";
let fields = "fields=media_url,media_type,thumbnail_url";
var access_token =
  "IGAAN20vFaDNpBZAFBHeVpJVjk1NVhVZAUZABeTMzeUhqcUFvVGhYTThjV3ZAOS0tkZA0k2RDE4UkEtc2F6U3A0YjVDMDNoamVic1hnU0o3VzBBUmxfXzJTRlY3cWE4NmV4bWhQbmIzeUljb2ZAqTjRfVHhqd2RBZADBKcEsxNGc0ZAnZAMNAZDZD";

var fullUrl = domainUrl + fields + "&access_token=" + access_token;

// console.log(fullUrl);

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
        const mediaUrl = element.media_type === 'VIDEO' ? element.thumbnail_url : element.media_url;
        if (mediaUrl) {
          document.querySelector(".grid-gallery").insertAdjacentHTML(
            "afterbegin",
            `
            <li>
              <a class="grid-gallery__item"
                 style="background-image: url('${mediaUrl}');"
                 href="${mediaUrl}"
                 title="${element.caption || ""}"
                 target="_blank">
                 ${element.media_type === 'VIDEO' ? '<span class="video-indicator">▶️</span>' : ''}
              </a>
            </li>
          `
          );
        }
      });
    }
  })
  .catch((error) => console.error("Wystąpił błąd:", error));
