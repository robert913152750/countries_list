import axios from 'axios'
const baseURL = 'https://restcountries.eu/rest/v2'

export const apiHelper = axios.create({
  baseURL
})
