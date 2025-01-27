<template>
  <q-card class="dark-bg q-my-md q-px-md">
    <div class="q-my-md">Total: {{ ascentStore.filteredAscents.length }}</div>
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
        enabled: true,
        usePointStyle: true,
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => {
            return tooltipItems[0].label
          },
          label: (context) => {
            // Get unique datasets (only first half since data is duplicated)
            const datasets = context.chart.data.datasets.slice(
              0,
              context.chart.data.datasets.length / 2
            )
            const dataIndex = context.dataIndex

            // Calculate total and prepare labels
            let total = 0
            const labels = datasets.map((dataset) => {
              const value = Math.abs(dataset.data[dataIndex])
              total += value
              // Create color box using Unicode block character
              const colorBox = '■'
              return {
                // text: `${colorBox} ${dataset.label}: ${value}`,
                text: `${dataset.label}: ${value}`,
                color: dataset.backgroundColor,
              }
            })

            // Return array with colored labels and total
            return [...labels.map((item) => item.text), '', `Total: ${total}`]
          },
          labelColor: (context) => {
            // Return white or transparent to prevent tooltip background color changes
            return {
              borderColor: 'transparent',
              backgroundColor: 'transparent',
            }
          },
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
