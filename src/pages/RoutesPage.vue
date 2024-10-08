<template>
  <div class="routes relative-position q-pt-md">
    <q-separator dark />
    <q-expansion-item icon="fa-solid fa-filter" label="Filter">
      <div class="q-my-md">
        <q-radio v-model="ascentStore.stats.allTime" :val="true" label="All time" dark />
        <q-radio v-model="ascentStore.stats.allTime" :val="false" label="Yearly" dark />
        <q-item class="q-my-md">
          <q-item-section side class="year">2011</q-item-section>
          <q-item-section>
            <q-slider
              v-model="ascentStore.stats.year"
              :min="2011"
              :max="2024"
              :step="1"
              snap
              :markers="1"
              label-always
              selection-color="transparent"
              :disable="ascentStore.stats.allTime"
            />
          </q-item-section>
          <q-item-section side class="year">2024</q-item-section>
        </q-item>
      </div>
    </q-expansion-item>
    <q-separator dark />
    <q-expansion-item icon="fa-solid fa-chart-simple" label="Statistics">
      <ascents-chart />
    </q-expansion-item>
    <q-separator dark class="q-mb-md" />

    <table class="q-mb-lg">
      <tr v-for="ascent in ascentStore.filteredAscents" :key="ascent.number">
        <td class="flag-cell">
          <div :class="`flag fi fis fi-${ascent.countryCode}`" />
        </td>
        <td class="route-details">
          <div class="route-location">{{ compileLocation(ascent) }}</div>
          <div class="route-name q-pr-sm">{{ ascent.name }}</div>
        </td>
        <td class="route-name">{{ ascent.name }}</td>
        <td class="route-grade">{{ ascent.grade }}</td>
        <td class="route-style">{{ ascent.style }}</td>
      </tr>
    </table>

    <q-inner-loading :showing="loading" dark />
  </div>
</template>

<script setup>
import { Notify } from 'quasar'
import { onMounted, ref } from 'vue'
import { useAscentStore } from '@/stores/ascentStore'
const ascentStore = useAscentStore()

import AscentsChart from '@/components/AscentsChart.vue'

defineOptions({
  name: 'RoutesPage',
})

const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    await ascentStore.fetchAscents()
  } catch (e) {
    console.error(e)
    Notify.create({
      message: 'Error loading data',
      color: 'negative',
      position: 'top',
      actions: [
        {
          icon: 'close',
          color: 'white',
          round: true,
        },
      ],
    })
  }
  loading.value = false
})

function compileLocation(a) {
  let result = ''
  if (isPresent(a.area)) result = `${a.area} > `
  if (isPresent(a.city)) result += `${a.city} > `
  result += `${a.crag}`
  if (isPresent(a.sector)) result += ` > ${a.sector}`
  return result
}

function isPresent(str) {
  return !!str && str.length > 0
}
</script>
<style scoped>
.routes {
  width: 750px;
  margin: auto;
  color: #ebebeb;
  font-size: 16px;
}

.routes table {
  width: 750px;
}

.flag {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border-radius: 50%;
}

/* SPORT CLIMBING */
.route-details {
  display: flex;
  justify-content: space-between;
}

.route-details > .route-name {
  display: none;
}

.route-location {
  font-size: 90%;
  opacity: 90%;
}

@media only screen and (max-width: 650px) {
  .route-details {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
  }

  .route-name {
    display: none;
  }

  .route-details > .route-name {
    display: flex;
  }

  .route-location {
    font-size: 80%;
  }
}

@media only screen and (max-width: 1200px) {
  .routes {
    width: 100%;
    margin: auto;
  }

  .routes table {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
  }
}
</style>
