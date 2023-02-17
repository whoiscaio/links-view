import axios from 'axios'
import api_url from './api'

export default async function gatherLinks() {
  const response = await axios.get(`${api_url}/links/`)

  return response.data
}
