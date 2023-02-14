<template>
    <article>
        <RouterLink :to="`/contact/${contact._id}`">
            <img v-bind:src="'/imgs/' + contact.imgId + '.svg'" alt="" />
        </RouterLink>
        <h2>{{ contact.name }}</h2>
        <span>{{ contact.email }}</span>
        <span>{{ contact.phone }}</span>
    </article>
</template>

<script>

export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    },
}
</script>
