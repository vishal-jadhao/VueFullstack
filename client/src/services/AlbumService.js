// import Axios from 'axios'
import Api from '@/services/Api'

// const Album = () => {
//   return Axios.get('https://jsonplaceholder.typicode.com/albums')
// }

const Album = {
  // Get call
  index () {
    return Api().get('songs')
  }
}

export default Album
