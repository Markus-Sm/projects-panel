let domainUrl = "https://graph.instagram.com/me/media?";
let fields = "fields=media_url,media_type,thumbnail_url,permalink,children{media_type,media_url}";
let limit = "limit=30"; // Zwiększamy limit, aby mieć większą szansę na znalezienie odpowiednich postów
var access_token =
  "IGAAN20vFaDNpBZAFBHeVpJVjk1NVhVZAUZABeTMzeUhqcUFvVGhYTThjV3ZAOS0tkZA0k2RDE4UkEtc2F6U3A0YjVDMDNoamVic1hnU0o3VzBBUmxfXzJTRlY3cWE4NmV4bWhQbmIzeUljb2ZAqTjRfVHhqd2RBZADBKcEsxNGc0ZAnZAMNAZDZD";

var fullUrl = domainUrl + fields + "&" + limit + "&access_token=" + access_token;

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
      const gridGallery = document.querySelector(".grid-gallery");
      gridGallery.innerHTML = '';
      
      let displayedImages = 0;
      const maxImages = 6;
      
      // Iterate through the data only once
      dataArray.data.some(post => {
        if ((post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") && post.media_url) {
          gridGallery.insertAdjacentHTML(
            "beforeend",
            `
            <li>
              <a class="grid-gallery__item"
                 style="background-image: url('${post.media_url}');"
                 href="${post.permalink}"
                 title="${post.caption || ""}"
                 target="_blank">
              </a>
            </li>
            `
          );
          
          displayedImages++;
        }
        
        // stop iterating when we have enough photos
        return displayedImages >= maxImages;
      });
    }
  })
  .catch((error) => console.error("Wystąpił błąd:", error));
