// const app = Vue.createApp({
//   data(){
//     return{
//       name:"Min Thu Hlaing",
//       age:32,
//       gender:"Male",
//       showInfo: true,
//     }
//   }
// })

// app.mount("#app")

// const app = Vue.createApp({
//   data(){
//     return{
//       name:"hunny kyaw",
//       age:44,
//       gender:"Female",
//       showInfo: true
//     }
//   }
// })

// app.mount("#app")

const app = Vue.createApp({
  methods: {
    mouseoverHandler(event, data) {
      console.log("mouse over is working...", event.type, data);
      document.querySelector("#div1").style.background = "red";
    },
    mouseleaveHandler(event, data) {
      console.log("mouse leave is working...", event.type, data);
      document.querySelector("#div2").style.background = "blue";
    },
    mousedbHandler(event, data) {
      console.log("mouse db is working...", event.type, data);
      document.querySelector("#div3").style.background = "green";
    },
  },
});

app.mount("#app");
