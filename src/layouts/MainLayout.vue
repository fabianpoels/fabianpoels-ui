<template>
  <q-layout view="hHh lpR fFf">
    <q-header id="header" class="bg-dark-page">
      <router-link :to="{ name: 'pictures' }" class="link">
        <q-icon name="fa-solid fa-camera" class="nav-icon" />
      </router-link>
      <router-link :to="{ name: 'routes' }" class="link">
        <q-icon name="fa-solid fa-mountain" class="nav-icon" />
      </router-link>
      <router-link :to="{ name: 'cv' }" class="link">
        <q-icon name="fa-solid fa-code" class="nav-icon" />
      </router-link>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout',
})
</script>
<style>
#header {
  height: 134px;
  display: flex;
  align-items: center;
}

.link {
  margin-right: 48px;
}

.nav-icon {
  font-size: 64px;
}
</style>
