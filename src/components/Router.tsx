import { Routes, Route, Navigate} from 'react-router-dom'
import Links from '../pages/Links'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/links" />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  )
}
export default Router