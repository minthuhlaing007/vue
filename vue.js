const app = Vue.createApp({
  data(){
    return{
      books:
      [
        {
          title:"Harry Potter",
          author:"J K Rolling",
          gender:"Female",
          age:33
        },
        {
          title:"Lord of the Rings",
          author:"John",
          gender:"Male",
          age:22
        },
        {
          title:"Game of Thrones",
          author:"Alice",
          gender:"Male",
          age:44
        }
      ],
      showIcon:true
    }
  }
})
app.mount("#app")