const app = Vue.createApp({
  // template:"<h1>Hello World</h1>"
  data(){
    return{
      name:"min thu hlaing",
      age:24,
      gender: "Male",
      isProgrammer: true,
    }
  },
  methods:{
    increaseAge(){
      this.age++;
    }
  }
})
app.mount("#app");