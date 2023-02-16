import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import Overlay from './Overlay'

const loaderAnimation = keyframes`
  from {
    height: 6rem;
    transform: translateY(0);
  }

  to {
    height: 3rem;
    transform: translateY(1.5rem);
  }
`

const LoaderContainer = styled.div`
  width: 8rem;
  height: 6rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: .8rem;

  div {
    width: 80%;
    background: #464646;

    animation-name: ${loaderAnimation};
    animation-duration: .5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    &:nth-child(2) {
      animation-delay: .125s;
    }

    &:nth-child(3) {
      animation-delay: .25s;
    }

    &:nth-child(4) {
      animation-delay: .375s;
    }
  }
`

function Loader () {
  const loaderPortalElement = document.getElementById('loader_portal')

  if (!loaderPortalElement) return null

  return ReactDOM.createPortal((
    <Overlay highZIndex>
      <LoaderContainer>
        <div />
        <div />
        <div />
        <div />
      </LoaderContainer>
    </Overlay>
  ), loaderPortalElement)
}

export default Loader