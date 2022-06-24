const { createApp } = Vue
import countDown from './comps/count-down.cmp.js'
// import showCurrentSeason from './comps/show-current-season.cmp.js'

const options = {
    template: `
       <count-down class="timer"  v-on:timeOut="timeOut" v-bind:time="Date.now() + 1000 *15">
    `,
    data() {
        return {
            darkMode: false
        }
    },
    methods: {
        timeOut() {
            var audio = new Audio('sound/timer_sound.wav')
            audio.play()
            console.log('Time is done')
        }
    },
    created() {
        this.fullDate = new Date()
    }
}

const app = createApp(options)
app.component('countDown', countDown)
// app.component('showTime', showTime)
app.mount('#app')
