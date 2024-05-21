<template>
  <q-layout view="hHh lpR fFf">
    <q-header id="header" class="bg-dark-page q-px-lg">
      <div id="nav">
        <router-link :to="{ name: 'pictures' }" class="q-mr-lg">
          <q-icon
            name="fa-solid fa-camera"
            size="xl"
            class="nav-icon"
            :class="{ small: $q.screen.lt.sm }"
          />
        </router-link>
        <router-link :to="{ name: 'routes' }" class="q-mr-lg">
          <q-icon name="fa-solid fa-mountain" size="xl" class="nav-icon" />
        </router-link>
        <router-link :to="{ name: 'cv' }" class="q-mr-lg">
          <q-icon name="fa-solid fa-code" size="xl" class="nav-icon" />
        </router-link>
      </div>
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
  height: 110px;
  display: flex;
  justify-content: space-between;
}

#nav {
  display: flex;
  align-items: center;
}

#links {
  padding-top: 35px;
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
