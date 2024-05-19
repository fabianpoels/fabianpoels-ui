<template>
  <q-card class="dark-bg q-my-md">
    <div class="q-my-md">Total: {{ totalAscents }}</div>
    <Bar id="ascents-chart" class="dark-bg" :options="chartOptions" :data="chartData" />
  </q-card>
</template>
<script setup>
import { computed } from 'vue'
import { useAscentStore } from '@/stores/ascentStore'
const ascentStore = useAscentStore()

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const totalAscents = computed(() =>
  Object.values(ascentStore.ascentsPerGrade).reduce((total, val) => total + val.total, 0)
)

const chartOptions = computed(() => {
  const max = Object.values(ascentStore.ascentsPerGrade).reduce(
    (max, val) => Math.max(max, val.total),
    -Infinity
  )
  return {
    responsive: true,
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        min: -max,
        max: max,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (val) => `${val.dataset.label}: ${Math.abs(val.raw)}`,
        },
      },
    },
  }
})

const chartData = computed(() => {
  const grades = [...ascentStore.grades].reverse()
  const ascentsPerGrade = ascentStore.ascentsPerGrade
  const datasets = [
    {
      label: 'onsight',
      stack: '0',
      backgroundColor: '#ebebeb',
      data: [],
    },
    {
      label: 'flash',
      stack: '0',
      backgroundColor: '#90d196',
      data: [],
    },
    {
      label: 'redpoint',
      stack: '0',
      backgroundColor: '#6aac95',
      data: [],
    },
    {
      label: 'onsight',
      stack: '0',
      backgroundColor: '#ebebeb',
      data: [],
    },
    {
      label: 'flash',
      stack: '0',
      backgroundColor: '#90d196',
      data: [],
    },
    {
      label: 'redpoint',
      stack: '0',
      backgroundColor: '#6aac95',
      data: [],
    },
  ]

  grades.forEach((grade) => {
    const ascents = ascentsPerGrade[grade]
    datasets[0].data.push(-ascents.onsight)
    datasets[1].data.push(-ascents.flash)
    datasets[2].data.push(-ascents.redpoint)
    datasets[3].data.push(ascents.onsight)
    datasets[4].data.push(ascents.flash)
    datasets[5].data.push(ascents.redpoint)
  })

  return {
    labels: grades,
    datasets: datasets,
  }
})
</script>
<style scoped>
.year {
  color: #ebebeb;
}
</style>
<style>
.q-slider__marker-labels-container {
  font-size: 90%;
}
</style>
