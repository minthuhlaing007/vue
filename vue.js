// First Method

// const app = Vue.createApp({
//   data() {
//     return {
//       books: [
//         {
//           title: "Harry Potter",
//           author: "J K Rolling",
//           gender: "Female",
//           age: 33,
//           img: "imgs/hacker.png",
//           isFav: false,
//         },
//         {
//           title: "Lord of the Rings",
//           author: "John",
//           gender: "Male",
//           age: 22,
//           img: "imgs/hacker.png",
//           isFav: false,
//         },
//         {
//           title: "Game of Thrones",
//           author: "Alice",
//           gender: "Male",
//           age: 44,
//           img: "imgs/hacker.png",
//           isFav: false,
//         },
//       ],
//       showIcon: true,
//       link: "https://google.com",
//       link1: "https://youtube.com",
//     };
//   },
// });
// app.mount("#app");

//Second Method

const app = Vue.createApp({
  data(){
    return{
      books:
      [
        {
          title:"You don't know Js",
          author:"Min Thu Hlaing",
          age:33,
          gender:"Male",
          img:"imgs/hacker.png",
          isFav:false,
        },
        {
          title:"You don't know Html",
          author:"Hlaing Min Than",
          age:34,
          gender:"Male",
          img:"imgs/hacker.png",
          isFav:false,
        },
        {
          title:"You don't know Css",
          author:"Alice",
          age:44,
          gender:"Female",
          img:"imgs/hacker.png",
          isFav:false
        },
        {
          title:"Harry Potter",
          author:"JK Rolling",
          age:55,
          gender:"Female",
          img:"imgs/hacker.png",
          isFav:false
        },
        {
          title:"Game of Thrones",
          author:"Emma Stone",
          age:99,
          gender:"Female",
          img:"imgs/hacker.png",
          isFav:false
        },
      ],
      bookInfo:true
    }
  },
  methods:{
    fav(book){
      book.isFav = !book.isFav
    }
  }
})
app.mount("#app")
