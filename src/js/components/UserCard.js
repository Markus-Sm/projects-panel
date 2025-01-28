export class UserCard {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    console.log(containerSelector);
  }

  render(userData) {
    const card = document.createElement("div");
    card.className = "user-card";

    card.innerHTML = `
            <h2>${userData.name}</h2>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Username:</strong> ${userData.username}</p>
            <p><strong>Website:</strong> ${userData.website}</p>
            <p><strong>Phone:</strong> ${userData.phone}</p>
        `;

    this.container.appendChild(card);
  }
}
