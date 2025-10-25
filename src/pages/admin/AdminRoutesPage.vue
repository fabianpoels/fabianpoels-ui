<template>
  <div class="routes relative-position q-pt-md">
    <q-table
      class="q-my-md"
      dark
      title="Ascents"
      :rows="ascents"
      :columns="columns"
      row-key="number"
      :loading="loading"
      :pagination="{ rowsPerPage: 0 }"
      virtual-scroll
    >
      <template #top>
        <div class="text-h4">Ascents</div>
        <q-btn
          v-if="authStore.authenticated"
          icon="add"
          label="Add ascent"
          class="q-ml-md"
          @click="showAddAscent = true"
        />
      </template>
      <template #body-cell-country="props">
        <q-td :props="props">
          <div class="flex justify-end">
            <div :class="`flag fi fis fi-${props.row.countryCode}`" />
            <div class="q-ml-sm">{{ props.value }}</div>
          </div>
        </q-td>
      </template>
      <template #body-cell-actions="props">
        <q-td :props="props">
          <q-btn outline flat square icon="edit" size="sm" />
        </q-td>
      </template>
    </q-table>

    <add-ascent v-model="showAddAscent" />
  </div>
</template>

<script setup>
import { Notify } from 'quasar'
import { computed, onMounted, ref } from 'vue'
import { useAscentStore } from '@/stores/ascentStore'
import { useAuthStore } from '@/stores/authStore'
const ascentStore = useAscentStore()
const authStore = useAuthStore()

import AddAscent from '@/components/admin/AddAscent.vue'

defineOptions({
  name: 'RoutesPage',
})

const loading = ref(false)
const showAddAscent = ref(false)

const ascents = computed(() =>
  ascentStore.ascents.map((a) => {
    return {
      ...a,
      location: compileLocation(a),
    }
  })
)

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

const columns = ref([
  {
    name: 'number',
    label: '#',
    field: 'number',
    sortable: true,
  },
  {
    name: 'country',
    label: 'country',
    field: 'country',
    sortable: true,
  },
  {
    name: 'location',
    label: 'location',
    field: 'location',
    sortable: true,
  },
  {
    name: 'name',
    label: 'name',
    field: 'name',
    sortable: true,
  },
  {
    name: 'grade',
    label: 'grade',
    field: 'grade',
    sortable: true,
  },
  {
    name: 'style',
    label: 'style',
    field: 'style',
    sortable: true,
  },
  {
    name: 'date',
    label: 'date',
    field: 'date',
    sortable: true,
  },
  {
    name: 'actions',
    label: '',
    sortable: false,
  },
])

onMounted(async () => {
  loading.value = true
  try {
    await ascentStore.fetchAdminAscents()
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
</script>
<style scoped></style>
