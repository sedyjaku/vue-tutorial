const app = Vue.createApp({
        data() {
            return {
                alertMessage: "",
                userInput: "",
                secondUserInput: "",
                confirmedSecondUserInput: ""
            }
        },
        methods: {
            showAlert() {
                this.alertMessage = "ALERT"
            },
            setUserInput(event) {
                this.userInput = event.target.value
            },
            setSecondUserInput(event) {
                this.secondUserInput = event.target.value
            },
            confirmSecondUserInput(event) {
                this.confirmedSecondUserInput = this.secondUserInput
            }
        }
    }
);
app.mount('#assignment')