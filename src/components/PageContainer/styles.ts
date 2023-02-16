import styled from 'styled-components'

const PageContainerBox = styled.div`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  height: 85vh;

  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);

  border-radius: 1rem;

  padding: 1rem;
  margin: 2rem auto 0;

  h1 {
    text-align: center;

    color: #224466 ;

    margin-bottom: 2rem;
  }

  .content {
    flex: 1;

    overflow: hidden;
  }
`

export default PageContainerBox