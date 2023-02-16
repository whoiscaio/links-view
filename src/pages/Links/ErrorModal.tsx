import ReactDOM from 'react-dom'
import Overlay from '../../components/Overlay'
import { CreateEditModalContainer } from './styles'

type ErrorModalProps = {
  close: () => void
}

function ErrorModal({ close }: ErrorModalProps) {
  const modalPortal = document.getElementById('modal_portal')
  if (!modalPortal) return null

  return ReactDOM.createPortal((
    <Overlay>
      <CreateEditModalContainer>
        <h3>Erro</h3>

        <p className="warnText">Ocorreu algum erro durante a operação, tente novamente.</p>

        <div className="action">
          <button className="buttonPattern" type="button" onClick={close}>Fechar</button>
        </div>
      </CreateEditModalContainer>
    </Overlay>
  ), modalPortal)
}

export default ErrorModal