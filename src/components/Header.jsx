import { NavLink, Link, Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Header(){
    return (
        <div>
            <header>
                <h1>Ski Colorado</h1>
                <NavBar />
            </header>
            {/* <main>
                <h1>Ski Colorado</h1>
            </main> */}
        </div>
    )
}

export default Header