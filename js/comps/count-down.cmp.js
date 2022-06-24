export default {
    template: `
    <section class='count-down'>
        <h1>COUNTDOWN</h1>
        <section class=timer>
            <span>{{formattedMinutes}}</span> :
            <span v-bind:class="[timeLeft <= 10999 ? 'seconds highlight' : 'seconds']">{{formattedSeconds}}</span>
        </section>
    </section>
    `,
    props: ['time'],
    data() {
        return {
            timeLeft: 0,
            intervalTimer: undefined
        }
    },
    computed: {
        formattedSeconds() {
            console.log(this.intervalTimer)
            if (this.timeLeft <= 0) {
                window.clearInterval(this.intervalTimer)
                this.intervalTimer = null
                this.$emit('timeOut', 'Time is done')
                return '00'
            }
            return (Math.floor(((((this.timeLeft / 3600000 - (Math.floor(this.timeLeft / 3600000))) * 60) - (Math.floor(((this.timeLeft / 3600000) - (Math.floor(this.timeLeft / 3600000))) * 60))) * 60))).toString().padStart(2, "0")

        },
        formattedMinutes() {
            if (!this.intervalTimer) return '00'
            return (Math.floor((((this.timeLeft / 3600000) - (Math.floor((this.timeLeft / 3600000)))) * 60))).toString().padStart(2, "0")
        }
    },
    created() {
        this.timeLeft = this.time - Date.now()
        this.intervalTimer = setInterval(() => {
            this.timeLeft = this.time - Date.now()
        }, 1000)

    }
}


