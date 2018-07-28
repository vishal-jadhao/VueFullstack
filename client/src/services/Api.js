import axios from 'axios'

const Api = () => {
  // Axios object with base url for api call
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}

export default Api
