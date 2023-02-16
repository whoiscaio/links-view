import axios from 'axios'
import Link from '../types/Link'
import aws_url from './aws'

export default async function createLink(newLink: Link) {
  const response = await axios.post(`${aws_url}/links`, newLink)

  return response.data
}