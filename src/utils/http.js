import axios from 'axios'
import config from '../config'

export default {
  get (url, data = {}) {
    return new Promise((resolve, reject) => {
      let urlParams = ''

      Object.keys(data).forEach((key) => {
        urlParams += '&' + key + '=' + data[key]
      })

      axios({
        method: 'GET',
        url:
          config.api.baseUrl +
          url +
          '?api_key=' +
          config.api.apiKey +
          urlParams,
        responseType: 'json'
      })
        .then((response) => resolve(response.data))
        .catch(reject)
    })
  }
}
