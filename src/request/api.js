import axios from './axios'

export function getTime (data) {
  return axios.get('/oa/api/work/time/query/', data)
}