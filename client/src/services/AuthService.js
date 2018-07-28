import Api from './Api'

const AuthService = {
  // register post call
  register (credentials) {
    return Api().post('register', credentials)
  }
}

export default AuthService
