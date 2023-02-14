<template>
    <section class="transfer-funds">
        <form @submit.prevent="onTransfer(transfer)">
            <input type="text" v-model="transfer" placeholder="transfer">
            <button class="prim-btn">transfer</button>
        </form>
    </section>
</template>

<script>
import { userService } from '../services/user.service'

export default {
    data() {
        return {
            transfer: null,
        }
    },
    methods: {
        async onTransfer(transfer) {
            try {
                await userService.transferFunds(transfer)
            } catch (err) {
                console.log('err:', err)
            }
        }
    }
}
</script>
