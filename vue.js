const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "game of throne",
          author: "min thu hlaing",
          age: 32,
          gender: "Male",
          img: "./imgs/hacker.png",
          isFav: false,
        },
        {
          title: "Harry Potter",
          author: "Huny Kyaw",
          age: 44,
          gender: "Female",
          img: "./imgs/hacker.png",
          isFav: true,
        },
        {
          title: "Fast and Furious",
          author: "The Rock",
          age: 55,
          gender: "Male",
          img: "./imgs/hacker.png",
          isFav: false,
        },
        {
          title: "SpiderMan",
          author: "Mary Jane",
          age: 11,
          gender: "Female",
          img: "./imgs/hacker.png",
          isFav: true,
        },
      ],
      bookInfo: true,
    };
  },
  methods: {
    handler(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
});
app.mount("#app");
