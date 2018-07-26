import Api from './Api'

const AuthService = {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

export default AuthService
