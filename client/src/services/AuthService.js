import Api from '@/services/Api'

const AuthService = {

  // register post call
  register (credentials) {
    return Api().post('register', credentials)
  },

  // login post call
  login (credentials) {
    return Api().post('login', credentials)
  }

}

export default AuthService
