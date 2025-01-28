import { instagramToken } from "../config.js";

class InstagramFeed {
  constructor() {
    this.feedContainer = document.getElementById("instagram-feed");
  }

  async run() {
    if (!instagramToken) {
      this.renderError("Instagram access token not found");
      return;
    }

    try {
      this.renderLoading();
      const posts = await this.fetchPosts();
      this.renderPosts(posts);
    } catch (error) {
      console.error("Instagram error:", error);
      this.renderError(error?.error?.message || "Failed to load posts");
    }
  }

  async fetchPosts() {
    const url = new URL("https://graph.instagram.com/v22.0/me/media");
    url.search = new URLSearchParams({
      fields: [
        "id", "caption", "media_type", "media_url", "permalink",
        "thumbnail_url", "timestamp", "username",
        "children{media_type,media_url,thumbnail_url}"
      ].join(","),
      access_token: instagramToken,
      limit: 6
    });

    const res = await fetch(url);
    const data = await res.json();
    
    if (!res.ok) throw data;
    if (!data.data?.length) throw new Error("No posts found");
    
    return data.data;
  }

  renderPosts(posts) {
    this.feedContainer.innerHTML = posts
      .map(post => this.createPostHTML(post))
      .filter(Boolean)
      .join("");
  }

  createPostHTML(post) {
    const mediaUrl = this.getMediaUrl(post);
    if (!mediaUrl) return "";

    return "<li>" +
      '<a class="grid-gallery__item" ' +
      'style="background-image: url(' + mediaUrl + ');" ' +
      'href="' + post.permalink + '" ' +
      'title="' + this.escapeHtml(post.caption || "") + '" ' +
      'target="_blank"></a>' +
      "</li>";
  }

  getMediaUrl({ media_type, thumbnail_url, media_url, children }) {
    if (media_type === "VIDEO") return thumbnail_url;
    if (media_type === "CAROUSEL_ALBUM") return children?.data[0]?.media_url || media_url;
    return media_url;
  }

  renderLoading() {
    this.feedContainer.innerHTML = '<li class="loading-spinner"><div class="spinner"></div><p>Loading...</p></li>';
  }

  renderError(message) {
    this.feedContainer.innerHTML = `<li class="error-message">${this.escapeHtml(message)}</li>`;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize
const feed = new InstagramFeed();
document.addEventListener("DOMContentLoaded", () => feed.run());
