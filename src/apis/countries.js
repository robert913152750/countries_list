import { apiHelper } from './../utils/helpers'

export default {
  getCountries () {
    // const searchParams = new URLSearchParams({ page })
    // return apiHelper.get(`/countries?${searchParams.toString()}`)
    return apiHelper.get('/')
  }
}
