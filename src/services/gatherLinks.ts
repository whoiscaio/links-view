import axios from 'axios'
import aws_url from './aws'

export default async function gatherLinks() {
  const response = await axios.get(`${aws_url}/links/`)

  return response.data
}
