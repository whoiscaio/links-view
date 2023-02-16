import styled, { css } from 'styled-components'

type OverlayProps = {
  position?: 'center' | 'bottom' | 'top',
  highZIndex?: boolean
}

export default styled.div<OverlayProps>`
  background: #00000088;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  ${({ position }) => (
    position === 'bottom'
    ? css`
        align-items: flex-end;
      `
    : position === 'top' 
      ? css`
        align-items: flex-start;
      `
      : css`
        align-items: center;
      `
  )}

  z-index: ${({ highZIndex }) => highZIndex ? 6000 : 5000};
`
