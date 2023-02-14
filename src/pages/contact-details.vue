<template>
    <section v-if="contact" class="contact-details">
        <article class="card">
            <img v-bind:src="'/imgs/' + contact.imgId + '.svg'" alt="" />
            <div>
                <h2>{{ contact.name }}</h2>
                <span>{{ contact.email }}</span>
                <span>{{ contact.phone }}</span>
                <RouterLink to="/contact"><button class="txt-btn">Back</button></RouterLink>
            </div>
        </article>
        <TransferFunds />
        <TransitionList v-if="loggedinUser" :transactions="loggedinUser.transactions" :contactId="$route.params._id"/>
    </section>
</template>

<script>
import TransferFunds from '@/cmps/transfer-funds.vue'
import TransitionList from '@/cmps/transaction-list.vue'

import { contactService } from '@/services/contact.service'

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params._id
        this.contact = await contactService.getById(contactId)
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
    },
    components: {
        TransferFunds,
        TransitionList
    }
}
</script>
