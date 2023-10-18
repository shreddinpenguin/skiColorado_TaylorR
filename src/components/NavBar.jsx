import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Sort from './Sort'
import Container from 'react-bootstrap/Container'

export default function NavBar({ allResorts, setIsSort }) {
    const navigate = useNavigate()
    const selectRef = useRef()

    function navigateWeb(e){
        if (e.target.value === "No Pass") return navigate("/")
        
        navigate(`/${e.target.value}`)
    }
    return (
        <Navbar className="navBar" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#/"></Navbar.Brand>
                <Nav className="me-auto">
                    <button onClick={(e)=>selectRef.current.value = selectRef.current.options[0].value} ><Link to="/">Home</Link></button>
                    <select ref={selectRef} onChange={(e)=> navigateWeb(e)}>
                        <option value="No Pass">Filter By Pass</option>
                        <option value="epic">Epic</option>
                        <option value="ikon">Ikon</option>
                    </select>
                    <Sort setIsSort={setIsSort} allResorts={allResorts}/>
                    <button><Link to="/NewMountainForm">New Mountain</Link></button>
                </Nav>
            </Container>
        </Navbar>
    )
}
