import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import PageContainer from '../../components/PageContainer'
import createLink from '../../services/createLink'
import gatherLinks from '../../services/gatherLinks'
import { default as LinkType } from '../../types/Link'
import CreateEditModal from './CreateEditModal'
import ErrorModal from './ErrorModal'
import Link from './Link'
import LinksContainer from './styles'

function Links() {
  const [links, setLinks] = useState<LinkType[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const [isAddNewLinkModalOpen, setIsAddNewLinkModalOpen] = useState<boolean>(false)

  async function handleGatherLinks() {
    setIsLoading(true)

    try {
      const links = await gatherLinks()

      setLinks(links)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleAddNewLink(title: string, url: string) {
    setIsLoading(true)

    try {
      const newLink = {
        title,
        url
      }
  
      await createLink(newLink)
      await handleGatherLinks()
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGatherLinks()
  }, [])

  return (
    <PageContainer title="Links">
      <LinksContainer>
        <div className="list">
          {
            links.length > 0 && links.map((link) => (
              <Link link={link} update={handleGatherLinks} />
            ))
          }
        </div>

        <div className="actions">
          <button className="buttonPattern" type="button" onClick={() => setIsAddNewLinkModalOpen(true)}>Adicionar Link</button>
        </div>
      </LinksContainer>
      
      {
        isAddNewLinkModalOpen && (
          <CreateEditModal action={handleAddNewLink} close={() => setIsAddNewLinkModalOpen(false)} />
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
    </PageContainer>
  )
}

export default Links