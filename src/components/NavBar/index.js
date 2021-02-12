import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll"
import './styles.css'

export default function NavBar() {
    return (
        <Navbar expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="aboutMe" spy={true} smooth={true} duration={500} >About Me</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
