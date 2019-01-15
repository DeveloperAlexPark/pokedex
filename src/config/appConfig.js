import axios from 'axios'

const appConfig = () => {
axios.defaults.baseUrl = 'https://pokeapi.co/api/v2/'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'
}

export default appConfig
