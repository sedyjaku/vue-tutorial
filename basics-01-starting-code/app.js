const app = Vue.createApp({
    data () {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Finish the course and master Vue!',
            courseGoalHtml: '<i>Finish the course and learn Vue!</i>',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() { return Math.random() < 0.5? this.courseGoalA : this.courseGoalB}
    }
});

app.mount('#user-goal');