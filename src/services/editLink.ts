import axios from 'axios'
import Link from '../types/Link'
import api_url from './api'

export default async function editLink(linkId: string, newLink: Link) {
  const response = await axios.put(`${api_url}/links/${linkId}/`, newLink)

  return response.data
}