<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center row fill-height>
      <panel title="Login">
        <div class='pt-4 pb-4 pr-4 pl-4'>
          <v-form>
            <v-text-field
              v-model='email'
              label='Email'
              name='email'
            ></v-text-field>
            <v-text-field
              v-model='password'
              label='Password'
              type='password'
              name='password'
            ></v-text-field>
            <div v-if='error'>
              <div class='error' v-html='error'></div>
            </div>
            <div class='text-lg-right'>
              <v-btn @click='login' class='teal login-btn'>Login</v-btn>
            </div>
          </v-form>
        </div>
      </panel>
    </v-layout>
  </v-container>
</template>

<script>
import AuthService from '@/services/AuthService'
import Panel from '@/components/common/Panel'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.error = null
      } catch (error) {
        console.log(error)
        this.error = error.response.data.error
      }
      this.email = ''
      this.password = ''
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: #fff;
    padding: 4px;
  }
  .login-btn {
    color: #fff;
  }
</style>
