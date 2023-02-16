import { Link } from 'react-router-dom'
import HeaderContainer from './styles'

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <h2>Link Manager</h2>
      </Link>
    </HeaderContainer>
  )
}

export default Header