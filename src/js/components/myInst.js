$(document).ready(function () {
  // var accessToken = 'IGQVJVV2xnd3VqNWFLaUxXVXNUSTVtQko4WVNjMXdiSS1tNkZA0YUtxSndDYk9SNkZA0RkNhZA0xRdEFwbkVLdnY1eVkxRE5MLXdzTFlnbDlmdWhlNWJ2VUdlNnpTOFRFZAW9FU1lSU041WjNMaXJqX1p3aAZDZD';
  var accessToken = instagramToken;

  $.ajax({
    url:
      "https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,caption,timestamp,permalink&access_token=" +
      accessToken,
    dataType: "json",
    type: "GET",

    success: function (json) {
      $.each(json.data, function (i, v) {
        if (i == 6) {
          return false;
        }
        if (v.thumbnail_url) {
          var media = v.thumbnail_url;
        } else {
          var media = v.media_url;
        }

        $("#instagram-feed").append(
          "<li>" +
            '<a class="grid-gallery__item" style="background-image: url(' +
            media +
            ');" href="' +
            v.permalink +
            '" title="' +
            v.caption +
            '" target="_blank"></a>' +
            "</li>"
        );
      });
    },

    error: function (xhr, status, errorThrown) {
      $("#instagram-feed").append(
        "<p>The API Token has expired. Please refresh your long-lived access token.</p>"
      );
    },
  });
});
