import axios from 'axios'
import Link from '../types/Link'
import api_url from './api'

export default async function createLink(newLink: Link) {
  const response = await axios.post(`${api_url}/links/`, newLink)

  return response.data
}