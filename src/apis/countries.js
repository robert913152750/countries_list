import { apiHelper } from './../utils/helpers'

export default {
  getCountries () {
    return apiHelper.get('/')
  },
  getCountry (alpha2Code) {
    return apiHelper.get(`/alpha/${alpha2Code}`)
  }
}
