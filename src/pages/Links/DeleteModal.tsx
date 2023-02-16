import ReactDOM from 'react-dom'
import Overlay from '../../components/Overlay'

import Link from '../../types/Link'
import { CreateEditModalContainer } from './styles'

type DeleteModalProps = {
  link: Link,
  close: () => void,
  action: () => void
}

function DeleteModal({ link, close, action }: DeleteModalProps) {
  const modalPortal = document.getElementById('modal_portal')
  if (!modalPortal) return null

  function handleAction() {
    action()
    close()
  }

  return ReactDOM.createPortal((
    <Overlay>
      <CreateEditModalContainer>
        <h3>Deletar Item</h3>

        <p className="warnText">Tem certeza que deseja deletar o item <b>{link.title}</b>?</p>

        <div className="action">
          <button className="buttonPattern" type="button" onClick={close}>Cancelar</button>
          <button className="buttonPattern" type="button" onClick={handleAction}>Deletar</button>
        </div>
      </CreateEditModalContainer>
    </Overlay>
  ), modalPortal)
}

export default DeleteModal