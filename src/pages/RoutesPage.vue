<template>
  <div class="routes relative-position">
    <q-radio v-model="ascentStore.stats.allTime" :val="true" label="All time" dark />
    <q-radio v-model="ascentStore.stats.allTime" :val="false" label="Custom" dark />
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
    <q-separator dark />
    <q-expansion-item icon="fa-solid fa-chart-simple" label="Statistics" default-opened>
      <ascents-chart />
    </q-expansion-item>
    <q-separator dark class="q-mb-md" />
    <table>
      <tr v-for="ascent in ascentStore.filteredAscents" :key="ascent.number">
        <td class="flag-cell">
          <div :class="`flag fi fis fi-${ascent.countryCode}`" />
        </td>
        <td class="route-location">
          {{ compileLocation(ascent) }}
        </td>
        <td>{{ ascent.name }}</td>
        <td class="route-grade">{{ ascent.grade }}</td>
        <td class="route-style">{{ ascent.style }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAscentStore } from '@/stores/ascentStore'
const ascentStore = useAscentStore()

import AscentsChart from '@/components/AscentsChart.vue'

defineOptions({
  name: 'RoutesPage',
})

const loading = ref(false)

onMounted(async () => {
  // loading.value = true
  await ascentStore.fetchAscents()
  // // loading.value = false
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
.route-location {
  font-size: 90%;
  opacity: 90%;
}

@media only screen and (max-width: 1400px) {
  .routes {
    width: 100%;
    margin: auto;
  }

  .routes table {
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    font-size: 130%;
  }
}

@media only screen and (max-width: 550px) {
  .flag-cell {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  .route-location {
    display: none;
  }
}
</style>
