<template>
  <div class='hello'>
    <h1>Register</h1>
    <hr>
    <input type='text' placeholder='Email Address' name='email' v-model='email' />
    <br><br>
    <input type='password' placeholder='Password' name='password' v-model='password' />
    <br><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
