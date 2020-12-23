const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    reduce(num){
      this.counter+=num
    }
  }
});

app.mount('#events');
