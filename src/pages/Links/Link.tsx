import { Edit, Trash } from 'lucide-react'
import { useState } from 'react'
import Loader from '../../components/Loader'
import deleteLink from '../../services/deleteLink'
import editLink from '../../services/editLink'
import { default as LinkType } from '../../types/Link'
import CreateEditModal from './CreateEditModal'
import DeleteModal from './DeleteModal'
import ErrorModal from './ErrorModal'
import { LinkContainer } from './styles'

type LinkProps = {
  link: LinkType,
  update: () => Promise<void>
}

function Link({ link, update }: LinkProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)

  async function handleDelete() {
    if (!link._id) return

    setIsLoading(true)

    try {
      await deleteLink(link._id)
      await update()
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleEdit(title: string, url: string) {
    if (!link._id) return

    setIsLoading(true)

    try {
      const newLink: LinkType = {
        title, url
      }

      await editLink(link._id, newLink)

      await update()
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <LinkContainer>
        <a href={link.url} target="_blank" rel="noreferrer">
          <h4>{link.title}</h4>
          <span>{link.url}</span>
        </a>
        <button type="button" onClick={() => setIsEditModalOpen(true)}><Edit color="#000066" /></button>
        <button type="button" onClick={() => setIsDeleteModalOpen(true)}><Trash color="#880000" /></button>
      </LinkContainer>

      {
        isEditModalOpen && (
          <CreateEditModal
            action={handleEdit}
            close={() => setIsEditModalOpen(false)}
            editObject={link}
          />
        )
      }

      {
        isDeleteModalOpen && (
          <DeleteModal
            action={handleDelete}
            close={() => setIsDeleteModalOpen(false)}
            link={link}
          />
        )
      }

      {
        isError && (
          <ErrorModal close={() => setIsError(false)} />
        )
      }
      
      {
        isLoading && (
          <Loader />
        )
      }
    </>
  )
}

export default Link