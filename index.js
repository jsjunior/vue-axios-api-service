import axios from 'axios'

export default class VueApiService {
  constructor (options) {
    this.options = options || {}
    this.create()
  }

  createInstance () {
    return axios.create(this.options)
  }

  create () {
    this.instance = this.createInstance()
    this.instance.interceptors.request.use(config => {
      return this.beforeRequest().then(auth => {
        Object.assign(config.headers, auth)
        return Promise.resolve(config)
      })
    })
  }

  beforeRequest () {}

  exec (params) {
    return this.instance(params)
  }
}
