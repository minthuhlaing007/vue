const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Harry Potter",
          author: "J K Rolling",
          gender: "Female",
          age: 33,
          img: "imgs/hacker.png",
          isFav: false,
        },
        {
          title: "Lord of the Rings",
          author: "John",
          gender: "Male",
          age: 22,
          img: "imgs/hacker.png",
          isFav: true,
        },
        {
          title: "Game of Thrones",
          author: "Alice",
          gender: "Male",
          age: 44,
          img: "imgs/hacker.png",
          isFav: false,
        },
      ],
      showIcon: true,
      link: "https://google.com",
      link1: "https://youtube.com",
    };
  },
});
app.mount("#app");
