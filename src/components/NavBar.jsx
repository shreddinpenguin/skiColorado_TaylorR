import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Sort from './Sort'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

export default function NavBar() {
    const navigate = useNavigate()
    const [pass, setPass] = useState(false)
    function navigateWeb(e){
        if (e.target.value === "No Pass") navigate("/"),
            setPass(false)
        
        else navigate(`/${e.target.value}`),
            setPass(true)
    }
    return (
        <Navbar className="navHead navbar fixed-top" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#/"></Navbar.Brand>
                <Nav className="me-auto">
                    <Button onClick={(e)=> setPass(false)}><Link to="/">Home</Link></Button>
                    <select onChange={(e)=> navigateWeb(e)}>
                        <option value="No Pass">Filter By Pass</option>
                        <option value="epic">Epic</option>
                        <option value="ikon">Ikon</option>
                    </select>
                    <Sort />
                </Nav>
            </Container>
        </Navbar>
    )
}
