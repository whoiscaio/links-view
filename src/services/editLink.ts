import axios from 'axios'
import Link from '../types/Link'
import aws_url from './aws'

export default async function editLink(linkId: string, newLink: Link) {
  const response = await axios.put(`${aws_url}/links/${linkId}`, newLink)

  return response.data
}