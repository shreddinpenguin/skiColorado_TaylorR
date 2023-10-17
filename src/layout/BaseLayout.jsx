import { NavLink, Link, Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'


function BaseLayout() {
  return (
    <div>
        <header>
            <h1>Ski Colorado</h1>
            <NavBar />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default BaseLayout;