<template>
    <ul class="transaction-list">
        <li class="transaction-preview" v-for="transaction in transactions" :key="transaction.at">
            <span>{{ transaction.to }}</span>
            <span>{{ transaction.amount }}</span>
            <span>{{ transaction.at }}</span>
        </li>
    </ul>
</template>

<script>

export default {
    props: {
        transactions: {
            type: Array,
            required: true,
        },
    },
}
</script>
