const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onAddClicked() {
      this.counter++
    },
    onReduceClicked(){
      this.counter--
    }
  }
});

app.mount('#events');
