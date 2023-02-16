import { useMemo, useState } from 'react'
import ReactDOM from 'react-dom'

import Overlay from '../../components/Overlay'
import useFormError from '../../hooks/useFormError'
import Link from '../../types/Link'
import { CreateEditModalContainer } from './styles'

type CreateEditModalProps = {
  action: (title: string, url: string) => void,
  close: () => void,
  editObject?: Link
}

function CreateEditModal({ action, close, editObject }: CreateEditModalProps) {
  const [title, setTitle] = useState<string>(editObject?.title || '')
  const [url, setUrl] = useState<string>(editObject?.url || '')

  const modalTypeText = useMemo(() => (
    (editObject?.title || editObject?.url) ? 'Editar' : 'Adicionar'
  ), [editObject])

  const [setNewError, cleanErrors, getErrorsByFieldname] = useFormError()

  function validateTitleField() {
    if (!title) {
      setNewError('O campo Título é obrigatório', 'title')
      return false
    }

    cleanErrors('title')
    return true
  }

  function validateUrlField() {
    if (!url) {
      setNewError('O campo Url é obrigatório', 'url')
      return false
    }

    cleanErrors('url')
    return true
  }

  function validateFields() {
    const isTitleFieldValid = validateTitleField()

    const isUrlFieldValid = validateUrlField()

    return (isTitleFieldValid && isUrlFieldValid)
  }

  function handleAction() {
    if (!validateFields()) {
      return
    }

    action(title, url)
    close()
  }
  
  const modalPortal = document.getElementById('modal_portal')
  if (!modalPortal) return null

  return ReactDOM.createPortal((
    <Overlay>
      <CreateEditModalContainer>
        <h3>{modalTypeText} Item</h3>

        <div className="field">
          <input
            type="text"
            placeholder="Título da página"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="error">{getErrorsByFieldname('title')}</span>
        </div>

        <div className="field">
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <span className="error">{getErrorsByFieldname('url')}</span>
        </div>

        <div className="action">
          <button className="buttonPattern" type="button" onClick={close}>Cancelar</button>
          <button className="buttonPattern" type="button" onClick={handleAction}>{modalTypeText}</button>
        </div>
      </CreateEditModalContainer>
    </Overlay>
  ), modalPortal)
}
export default CreateEditModal