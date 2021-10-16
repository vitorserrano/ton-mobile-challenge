import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/vitorserrano/5b113c9029effcf95323bd2903224616/raw/c96657242a8a9d3a6c5241370208b4cb17687d07',
})

export default api
