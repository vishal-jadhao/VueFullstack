import axios from 'axios'

const Api = () => {
  return axios.create({
    baseURL: `http://localhost:8085`
  })
}

export default Api
