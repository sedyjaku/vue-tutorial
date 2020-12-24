const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            fullNameData: ''
        };
    },
    computed: {
        resultCheckMessage() {
            if (this.counter < 37){
                return 'Not There yet';
            }
            if (this.counter > 37){
                return 'Too much!';
            }
            return 'Exactly what i wanted!' + this.counter;
        }
    },
    watch: {
        counter(value) {
            const that = this
            setTimeout(function (){
                that.counter = 0
            }, 5000)
        },
    },
    methods: {
        reduce(num) {
            this.counter += num
        }
    }
});

app.mount('#assignment');
