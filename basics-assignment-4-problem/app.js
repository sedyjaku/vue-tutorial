const app = Vue.createApp({
        data() {
            return {
                userInput: '',
                toggle: false,
                bgColor: 'red'
            }
        },
    computed: {
            paragraphClass(){
                return this.toggle ? 'visible' : 'hidden';
            }
    },
    methods: {
            toggleParagraph(){
                this.toggle = !this.toggle;
            }
    }
    }

);

app.mount('#assignment')