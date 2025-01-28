// import { UserCard } from "./components/UserCard.js";

// console.log("Data loaded");

// // Create instance of UserCard
// const userCard = new UserCard("#user-container");

// fetch("https://jsonplaceholder.typicode.com/users/1", {
//   method: "GET",
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Something went wrong");
//     }
//   })
//   .then((data) => {
//     userCard.render(data);
//   })
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res.ok); // true
//     console.log(res.status); // 200
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
