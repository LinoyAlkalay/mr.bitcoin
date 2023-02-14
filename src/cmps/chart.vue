<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs"
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js"

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
)

export default {
    name: "BarChart",
    components: { Bar },
    props: {
        data: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            chartData: {
                labels: this.data.map((row) => row.x),
                datasets: [
                    {
                        data: this.data.map((row) => row.y),
                        backgroundColor: '#f87979',
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
        }
    },
}
</script>