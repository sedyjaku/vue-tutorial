const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    reduce(num){
      this.counter+=num
    },
    setName(event){
      this.name =  event.target.value
    }
  }
});

app.mount('#events');
