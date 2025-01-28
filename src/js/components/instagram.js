import { instagramToken } from '../config.js';

$(document).ready(function () {
  const INSTAGRAM_API_VERSION = "v21.0"; // Latest API version
  const POSTS_TO_SHOW = 6;

  function loadInstagramFeed(accessToken) {
    $.ajax({
      url: `https://graph.instagram.com/${INSTAGRAM_API_VERSION}/me/media`,
      data: {
        fields:
          "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
        access_token: accessToken,
        limit: POSTS_TO_SHOW,
      },
      type: "GET",
      success: function (response) {
        if (!response.data || response.data.length === 0) {
          showError("No posts found");
          return;
        }

        const feed = $("#instagram-feed");
        feed.empty();

        response.data.forEach((post) => {
          const mediaUrl =
            post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;
          if (!mediaUrl) return;

          const caption = post.caption || "";

          const postElement = `
            <li>
              <a 
                class="grid-gallery__item" 
                style="background-image: url('${mediaUrl}');" 
                href="${post.permalink}"
                title="${caption.replace(/"/g, "&quot;")}"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          `;

          feed.append(postElement);
        });
      },
      error: function (xhr, status, error) {
        showError(getErrorMessage(xhr));
      },
    });
  }

  function showError(message) {
    $("#instagram-feed").html(`
      <li class="error-message">
        ${message}
      </li>
    `);
  }

  function getErrorMessage(xhr) {
    if (xhr.responseJSON && xhr.responseJSON.error) {
      const error = xhr.responseJSON.error;

      if (error.code === 190) {
        return "Instagram access token has expired. Please generate a new one.";
      }

      return (
        error.message || "An error occurred while fetching Instagram posts."
      );
    }

    return "Unable to load Instagram feed. Please try again later.";
  }

  // Initialize feed if token exists
  if (typeof instagramToken !== "undefined") {
    loadInstagramFeed(instagramToken);
  } else {
    showError(
      "Instagram access token not found. Please configure your access token."
    );
  }
});
