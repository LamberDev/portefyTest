import axios from "axios"
import { getResponseTime } from "../utils/addResponseTime.js"
const API_BASE_URL = 'http://businessapibeta.portefy.com/cliente/get_direct_delivery_price'
      
const API = axios.create({
  baseURL: API_BASE_URL
})


API.interceptors.request.use(
  config => {
    const newConfig = { ...config }
    newConfig.metadata = { startTime: new Date() }
    return newConfig
  },
  error => {
    return Promise.reject(error)
  }
)
API.interceptors.response.use(
  response => {
    const newRes =  {...response }
    newRes.config.metadata.endTime = new Date()
    newRes.duration =
      newRes.config.metadata.endTime - newRes.config.metadata.startTime
    return getResponseTime(newRes.duration); //Devolvemos el tiempo de cada rspuesta
  },
  error => {
    const newError = { ...error }
    newError.config.metadata.endTime = new Date()
    newError.duration =
      newError.config.metadata.endTime - newError.config.metadata.startTime
    return Promise.reject(newError)
  }
)

export { API }