import { Outlet, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'


function BaseLayout({ setIsSort }) {
  return (
    <div>
        <header>
            <h1>Ski Colorado</h1>
            <NavBar setIsSort={setIsSort} />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default BaseLayout;