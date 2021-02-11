import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll"
import './styles.css'

export default function NavBar() {
    return (
        <Nav>
            <Nav.Item>
                <Navbar.Brand href="/">Jae Kim</Navbar.Brand>
            </Nav.Item>
            <Nav.Item>
                <Link activeClass="active" className="aboutMe" to="aboutMe" spy={true} smooth={true} duration={500} >About Me</Link>
            </Nav.Item>
            <Nav.Item>
                <Link activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
            </Nav.Item>
            <Nav.Item>
                <Link activeClass="active" className="contactMe" to="contactMe" spy={true} smooth={true} duration={500} >Contact Me</Link>
            </Nav.Item>
        </Nav>
    )
}
