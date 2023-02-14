<template>
    <header class="full main-layout app-header">
        <main>
            <h1>
                <span>Mr.</span>
                <span class="fa-solid bitcoin"></span>
                <span class="logo">itCoin</span>
            </h1>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contact">Contact</RouterLink>
                <RouterLink to="/stats">Stats</RouterLink>
                <RouterLink to="/signup" v-if="!loggedinUser">Signup</RouterLink>
                <button v-if="loggedinUser" @click="onLogout">Logout</button>
                <span v-if="loggedinUser">Welcome, {{ loggedinUser.name }}</span>
            </nav>
        </main>
    </header>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service'

export default {
    data() {
        return {
            rate: 0,
        }
    },
    async created() {
        this.rate = await bitcoinService.getRate()
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
    },
    methods: {
        async onLogout() {
            try {
                await this.$store.dispatch({ type: 'logout' })
            } catch (err) {
                console.log('err:', err)
            } finally {
                this.$router.push('/')
            }
        }
    }
}
</script>
