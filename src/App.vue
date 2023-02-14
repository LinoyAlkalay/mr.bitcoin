<script>
import AppHeader from '@/cmps/app-header.vue'
import AppFooter from '@/cmps/app-footer.vue'
export default {
    components: {
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
    <main class="main-layout app">
        <AppHeader />
        <RouterView />
        <AppFooter />
    </main>
</template>
