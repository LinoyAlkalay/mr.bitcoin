<template>
    <section class="contact-edit">
        <form @submit.prevent="save(contact)" v-if="contact">
            <h2>Edit contact</h2>
            <input type="text" v-model="contact.name" placeholder="name">
            <input type="email" v-model="contact.email" placeholder="email">
            <input type="tel" v-model="contact.phone" placeholder="phone">
            <button class="prim-btn">Save</button>
        </form>
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service'

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params._id
        if (contactId) {
            this.contact = await contactService.getById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    methods: {
        async save(contact) {
            try {
                const contactToSave = { ...contact }
                await this.$store.dispatch({ type: 'saveContact', contact: contactToSave })
            } catch (err) {
                console.log('err:', err)
            } finally {
                this.$router.push('/contact')
            }
        }
    }
}
</script>

