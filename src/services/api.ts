import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://gist.githubusercontent.com/vitorserrano/5b113c9029effcf95323bd2903224616/raw/b9344a65e52179c08bb02fdf0ea7df0a3ebe19f8',
})

export default api
