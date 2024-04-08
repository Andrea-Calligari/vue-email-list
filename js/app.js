
const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Email-List!',
            email: this.fetchEmail(),
            emailsArray: []


        }
    },
    methods: {
        fetchEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.email = response.data.response
                        this.emailsArray.push(this.email)


                    })
            }
        }
    }


}).mount('#app')


