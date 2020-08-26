# Vue Axios API Service
Wrapper for consume axios without the vue axios plugin.

## Installation
```
npm i vue-axios-api-service
```

## Usage
Create your api service class extending package main class passing to super constructor initial options to create an axios instance.
```
import VueAxiosApiService from 'vue-axios-api-service'

export default class ApiService extends VueAxiosApiService {
  constructor () {
    const AXIOS_OPTIONS = {
      baseURL: process.env.VUE_APP_API
    }
    super(AXIOS_OPTIONS)
  }
}
```

Build your params:
```
const params = {
  url: '',
  method: 'post',
  data
}
```

Call the ```exec``` method passing your params:
```
const res = this.exec(params)
```

### Overriding request interceptor
Create an asynchronous method ```beforeRequest``` that will be processed before every request when using main instance.
To avoid this, the ```createInstance``` method return a fresh instance to use locally. 

## Licence
MIT
