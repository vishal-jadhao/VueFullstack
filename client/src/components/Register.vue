<template>
 <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center row fill-height>
        <v-flex xs12 sm6 md6 lg6>
          <div class="white elevation-2">
            <v-toolbar flat dense class="teal" dark>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class='pt-4 pb-4 pr-4 pl-4'>
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
              <div v-if="error">
                <div class="error" v-html="error"></div>
              </div>
              <div class="text-lg-right">
                <v-btn @click="register" class="teal register-btn">Register</v-btn>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
 </v-content>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: #fff;
    padding: 4px;
  }
  .register-btn {
    color: #fff;
  }
</style>
