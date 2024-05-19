<template>
  <q-layout view="hHh lpR fFf">
    <q-header id="header" class="bg-dark-page">
      <div id="nav">
        <router-link :to="{ name: 'pictures' }" class="link">
          <q-icon name="fa-solid fa-camera" class="nav-icon" />
        </router-link>
        <router-link :to="{ name: 'routes' }" class="link">
          <q-icon name="fa-solid fa-mountain" class="nav-icon" />
        </router-link>
        <router-link :to="{ name: 'cv' }" class="link">
          <q-icon name="fa-solid fa-code" class="nav-icon" />
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
defineOptions({
  name: 'MainLayout',
})
</script>
<style>
#header {
  height: 134px;
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
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

.link {
  margin-right: 48px;
}

.nav-icon {
  font-size: 64px;
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
