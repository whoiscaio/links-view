import styled from 'styled-components'

const LinksContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  .list {
    flex: 1;
    
    overflow: auto;
  }

  .actions {
    display: flex;
    justify-content: flex-end;

    margin: 2rem 1rem 1rem;
  }
`

export const LinkContainer = styled.div`
  width: 100%;
  min-height: 6.6rem;

  display: flex;

  border-radius: 1rem;
  border-bottom: 1px solid #224466;

  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);

  margin-bottom: 1rem;

  button {
    background: none;
    border: 0;

    margin: 0 1rem;

    padding: 0 1rem;

    cursor: pointer;

    transition: transform .12s ease-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  h4, span {
    color: #224466;

    transition: font-size .12s ease-out;
  }

  h4 {
    font-size: 1.6rem;
  }

  span {
    font-size: 1.3rem;
  }

  a {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: .8rem 2rem;

    &:hover {
      h4 {
        font-size: 1.63rem;
      }

      span {
        font-size: 1.33rem;
        text-decoration: underline;
      }
    }
  }
`

export const CreateEditModalContainer = styled.div`
  width: 100%;
  max-width: 400px;
  
  background: #ffffff;
  border-radius: 1rem;

  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);

  padding: 1rem 1.4rem;

  h3 {
    font-size: 1.4rem;
  }

  .field {
    margin: 1rem 0;

    input {
      width: 100%;

      padding: .6rem;
    }
  }

  .action {
    display: flex;
    justify-content: space-evenly;
  }

  .warnText {
    font-size: 1.3rem;

    margin: 1rem 0;
  }

  .error {
    display: block;
    margin: .4rem 0;

    font-size: 1.2rem;
    font-weight: 700;
    color: #cc0000;
  }
`

export default LinksContainer