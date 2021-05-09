import { apiHelper } from './../utils/helpers'

export default {
  getCountries () {
    // const searchParams = new URLSearchParams({ page })
    // return apiHelper.get(`/countries?${searchParams.toString()}`)
    return apiHelper.get('/')
  },
  getCountry (alpha2Code) {
    return apiHelper.get(`/alpha/${alpha2Code}`)
  }
}
