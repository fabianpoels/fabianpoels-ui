<template>
  <q-dialog v-model="show">
    <q-card style="width: 700px; max-width: 80vw" dark>
      <q-card-section>
        <div class="text-h6">Add ascent</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!-- <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" /> -->
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Add" :disable="disableAdd" :loading="saving" @click="addAscent" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, defineModel, computed } from 'vue'
import { useAscentStore } from '@/stores/ascentStore'
const ascentStore = useAscentStore()

const show = defineModel()
const saving = ref(false)
const disableAdd = computed(() => saving.value)

function addAscent() {
  saving.value = true
}
</script>
