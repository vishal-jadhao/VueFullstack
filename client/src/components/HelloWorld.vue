<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm6 md6 lg6>
        <h1 class="text-lg-center">{{msg}}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
