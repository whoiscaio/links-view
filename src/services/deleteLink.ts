import axios from 'axios'
import aws_url from './aws'

export default async function deleteLink(linkId: string) {
  await axios.delete(`${aws_url}/links/${linkId}`)
}