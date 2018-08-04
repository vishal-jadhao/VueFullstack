<template>
  <v-app id="app">
    <v-content>
      <PageHeader></PageHeader>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from './components/Header.vue'
export default {
  name: 'App',
  components: { PageHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
