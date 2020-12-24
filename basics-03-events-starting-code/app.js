const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullNameData: ''
    };
  },
  computed: {
    fullname() {
      if (this.name === ''){
        return '';
      }
      return this.name + ' Lastname'
    }
  },
  watch: {
    name(value) {
      if (value ===''){
        this.fullNameData = ''
      }
      else {
        this.fullNameData = this.name + ' Lastname'
      }
      console.log("name changed")
    }
  },
  methods: {
    submitForm(event){
      event.preventDefault();
      alert('Submitted!');
    },
    reduce(num){
      this.counter+=num
    },
    setName(event){
      this.name =  event.target.value
    },
    resetInput(){
      this.name = ''
    },
    outputFullName(){
      if (this.name === ''){
        return '';
      }
      return this.name + ' Lastname'
    }
  }
});

app.mount('#events');
