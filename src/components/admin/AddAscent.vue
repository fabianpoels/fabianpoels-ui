<template>
  <q-dialog v-model="show">
    <q-card style="width: 700px; max-width: 80vw" dark>
      <q-card-section>
        <div class="text-h6">Add ascent</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-select
          v-model="ascent.country"
          :options="countryOptions"
          label="Country"
          dark
          :disable="saving"
        />
        <q-select v-model="ascent.area" label="Area" dark :disable="saving" />
        <q-select
          v-model="ascent.city"
          :options="cityOptions"
          label="City"
          dark
          :disable="saving"
        />
        <q-select
          v-model="ascent.crag"
          @update:model-value="updateCrag"
          @filter="cragFilter"
          :options="cragOptions"
          label="Crag"
          dark
          use-input
          clearable
          :disable="saving"
        />

        <q-input
          type="text"
          v-model="ascent.name"
          label="Name"
          dark
          class="q-mt-md"
          :disable="saving"
        />
        <q-select
          v-model="ascent.grade"
          :options="ascentStore.grades"
          label="Grade"
          dark
          :disable="saving"
        />
        <q-select
          v-model="ascent.style"
          :options="ascentStore.styles"
          label="Style"
          dark
          :disable="saving"
        />
        <q-date v-model="ascent.date" minimal mask="DD/MM/YYYY" dark class="q-mt-lg" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          label="Add"
          :disable="!validAscent"
          :loading="saving"
          @click="addAscent"
          dark
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useAscentStore } from '@/stores/ascentStore'
const ascentStore = useAscentStore()
import { alert } from '@/utils/alert'
import { DateTime } from 'luxon'

const show = defineModel()
const saving = ref(false)
const ascent = ref({})
const cragOptions = ref([])

const allCragOptions = computed(() =>
  ascentStore.locations.map((l, index) => ({
    label: l.crag,
    value: index,
  }))
)
const cityOptions = ascentStore.cities
const countryOptions = ascentStore.countries

const validAscent = computed(() => {
  const a = ascent.value
  if (a.country.length < 1) return false
  if (a.countryCode.length < 1) return false
  if (a.crag.length < 1) return false
  if (a.name.length < 1) return false
  if (a.grade.length < 1) return false
  if (a.style.length < 1) return false
  if (a.date.length < 1) return false

  return true
})

function newAscent() {
  const d = Date.now()
  return {
    date: DateTime.now().toFormat('dd/MM/yyyy'),
    country: '',
    countryCode: '',
    area: '',
    city: '',
    crag: '',
    sector: '',
    name: '',
    grade: '',
    style: '',
  }
}

function cragFilter(val, update) {
  update(() => {
    const needle = val.toLowerCase()
    cragOptions.value = allCragOptions.value.filter(
      (c) => c.label.toLowerCase().indexOf(needle) > -1
    )
  })
}

function updateCrag(val) {
  if (!val) {
    ascent.value.city = ''
    ascent.value.area = ''
    ascent.value.country = ''
    ascent.value.countryCode = ''
    return
  }
  const location = ascentStore.locations[val.value]
  if (!location) return
  ascent.value.city = location.city
  ascent.value.area = location.area
  ascent.value.country = location.country
  ascent.value.countryCode = location.countryCode
}

watch(show, (val) => {
  if (val === true) {
    cragOptions.value = [...allCragOptions.value]
    saving.value = false
    ascent.value = newAscent()
  }
})

async function addAscent() {
  saving.value = true
  try {
    const a = { ...ascent.value }
    if (Number.isInteger(a.crag.value)) a.crag = a.crag.label
    await ascentStore.addAscent(a)
    alert.success('Ascent added')
    show.value = false
  } catch (e) {
    console.error(e)
    alert.error(e)
  } finally {
    saving.value = false
  }
}
</script>
