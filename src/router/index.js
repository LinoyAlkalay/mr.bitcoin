import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/home-view.vue'
import contactIndex from '../pages/contact-index.vue'
import ContactDetails from '../pages/contact-details.vue'
import ContactEdit from '../pages/contact-edit.vue'
import Statistics from '../pages/statistics.vue'
import LoginSignup from '../pages/login-signup.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/contact',
            component: contactIndex,
        },
        {
            path: '/contact/:_id',
            component: ContactDetails,
        },
        {
            path: '/contact/edit/:_id?',
            component: ContactEdit,
        },
        {
            path: '/stats',
            component: Statistics,
        },
        {
            path: '/signup',
            component: LoginSignup,
        },
    ],
}
const router = createRouter(routerOptions)

export default router
