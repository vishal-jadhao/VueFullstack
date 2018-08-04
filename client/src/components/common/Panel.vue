<template>
  <v-flex xs12 sm6 md6 lg6>
    <div class='white elevation-2'>
      <v-toolbar flat dense class='teal' dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <div class='pt-4 pb-4 pr-4 pl-4 panel-content'>
        <slot>
          No content is slot!
        </slot>
      </div>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: 'Panel',
  props: [
    'title'
  ]
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
