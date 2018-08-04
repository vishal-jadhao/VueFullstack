<template>
  <v-toolbar flat dense class='teal' fixed=''>
    <v-toolbar-title><div class='home' @click="navigateTo('/')">Tabtracker</div></v-toolbar-title>
    <v-toolbar-items class='hidden-xs-and-down'>
      <v-btn
        flat
        @click="navigateTo('songs')"
      >
      Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class='hidden-xs-and-down'>
      <v-btn
        v-if='!$store.state.isUserLoggedIn'
        flat
        @click="navigateTo('register')"
      >
      Register
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class='hidden-xs-and-down'>
      <v-btn
        v-if='!$store.state.isUserLoggedIn'
        flat
        @click="navigateTo('login')"
      >
      Login
      </v-btn>
    </v-toolbar-items>
     <v-toolbar-items class='hidden-xs-and-down'>
      <v-btn
        v-if='$store.state.isUserLoggedIn'
        flat
        @click='logout()'
      >
      Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // Redirect to home
      this.$router.push('home')
    }
  }
}
</script>

<style>
  .home {
    cursor: pointer;
    color: #fff;
  }
  .v-btn__content {
    color: #fff;
  }
</style>
