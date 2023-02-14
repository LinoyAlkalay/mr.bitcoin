<template>
    <section class="statistics">
        <!-- <Chart v-if="marketHistory" :data="marketHistory" /> -->
        <!-- <Chart v-if="avgSize" :data="avgSize" /> -->
        <article>
            <LineChart v-if="avgSize" :dataLine="avgSize" />
        </article>
        <article>
            <LineChart v-if="avgSize" :dataLine="marketHistory" />
        </article>
    </section>
</template>

<script>
import Chart from '@/cmps/chart.vue'
import LineChart from '@/cmps/line-chart.vue'

import { bitcoinService } from '../services/bitcoin.service'

export default {
    data() {
        return {
            marketHistory: null,
            avgSize: null,
        }
    },
    async created() {
        this.marketHistory = await bitcoinService.getMarketPriceHistory()
        this.avgSize = await bitcoinService.getAvgBlockSize()
    },
    components: {
        Chart,
        LineChart
    },
}
</script>


