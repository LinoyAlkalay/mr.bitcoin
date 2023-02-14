<template>
    <section class="contact-index">
        <UserMsg />
        <ContactFilter @filter="onSetFilterBy" />
        <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
        <RouterLink to="/contact/edit"><button class="prim-btn">Add a Contact</button></RouterLink>
    </section>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js'

import ContactList from '@/cmps/contact-list.vue'
import ContactFilter from '@/cmps/contact-filter.vue'
import UserMsg from '@/cmps/user-msg.vue'

export default {
    data() {
        return {
        }
    },
    async created() {
        this.$store.dispatch({type: 'loadContacts'})
    },
    methods: {
        async removeContact(contactId) {
            const msg = {
                txt: `Contact ${contactId} deleted.`,
                type: 'success',
                timeout: 2500,
            }
            this.$store.dispatch({ type: 'removeContact', contactId })
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.$store.dispatch({type: 'loadContacts', filterBy})
        },
    },
    computed: {
        contacts() { 
            return this.$store.getters.contacts 
        },
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    },
}
</script>