import { createStore } from 'vuex'

import { userStore } from './user.store.js'
import { contactStore } from './contact.store.js'

export const myStore = createStore({
    strict: true,
    modules: {
        userStore,
        contactStore
    }
})

myStore.subscribe((cmd, state) => {
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
})

