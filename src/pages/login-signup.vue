<template>
    <section class="login-signup">
        <form @submit.prevent="save(credentials)">
            <h2>Signup</h2>
            <input type="text" v-model="credentials.name" placeholder="name">
            <button class="prim-btn">Save</button>
        </form>
    </section>
</template>

<script>

export default {
    data() {
        return {
            credentials: { name: '', transactions: [] }
        }
    },
    async created() {

    },
    methods: {
        async save(credentials) {
            try {
                await this.$store.dispatch({ type: 'signup', credentials })
            } catch (err) {
                console.log('err:', err)
            } finally {
                this.$router.push('/')
            }
        }
    }
}
</script>

