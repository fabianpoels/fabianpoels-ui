<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated id="header" class="bg-dark-page">
      <q-tabs align="left">
        <q-route-tab :to="{ name: 'cv' }">
          <q-icon name="fa-solid fa-code" size="lg" class="nav-icon" />
        </q-route-tab>
        <q-route-tab :to="{ name: 'pictures' }">
          <q-icon name="fa-solid fa-camera" size="lg" class="nav-icon" />
        </q-route-tab>
        <q-route-tab :to="{ name: 'routes' }">
          <q-icon name="fa-solid fa-mountain" size="lg" class="nav-icon" />
        </q-route-tab>
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <div id="footer" class="bg-dark-page">
      Copyright 2024 - hello@fabianpoels.com
      <a href="https://www.instagram.com/fabianpoels/" target="_blank">
        <q-icon name="fa-brands fa-instagram" size="sm" class="link-icon" />
      </a>
      <a href="https://github.com/fabianpoels" target="_blank">
        <q-icon name="fa-brands fa-github" size="sm" class="link-icon" />
      </a>
    </div>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
const $q = useQuasar()

defineOptions({
  name: 'MainLayout',
})
</script>
<style>
#header {
  height: 90px;
  display: flex;
  /* justify-content: center; */
}

#footer {
  padding-bottom: 10px;
  margin-right: 15px;
  text-align: right;
}

.nav-icon {
  opacity: 70%;
}

.link-icon {
  opacity: 70%;
  margin-left: 10px;
}

.nav-icon:hover,
.link-icon:hover {
  opacity: 100%;
}
</style>
