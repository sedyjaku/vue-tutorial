const app = Vue.createApp({
        data() {
                return {
                        firstName: '<i>Jakub</i>',
                        lastName: 'Šedý',
                        age: 1000500900,
                        imgLink: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
                }
        },
        methods: {
                addToAge(valueToAdd) { return this.age + valueToAdd },
                favoriteNumber() { return Math.floor(Math.random()*1000)}
        }
}
);
app.mount('#assignment')