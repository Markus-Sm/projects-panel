let domainUrl = "https://graph.instagram.com/me/media?";
let fields = "fields=media_url,media_type,thumbnail_url,permalink,children{media_type,media_url}";
let limit = "limit=20"; // Zwiększamy limit, aby znaleźć więcej zdjęć
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
      const imagePosts = dataArray.data
        .filter(post => {
          const isImage = post.media_type === "IMAGE";
          const isCarousel = post.media_type === "CAROUSEL_ALBUM";
          const hasValidUrl = post.media_url;
          return (isImage || isCarousel) && hasValidUrl;
        })
        .slice(0, 6);

      document.querySelector(".grid-gallery").innerHTML = '';
      
      imagePosts.forEach((element) => {
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
