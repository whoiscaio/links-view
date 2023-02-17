import axios from 'axios'
import api_url from './api'

export default async function deleteLink(linkId: string) {
  await axios.delete(`${api_url}/links/${linkId}/`)
}