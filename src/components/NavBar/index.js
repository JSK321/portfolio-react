import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll"
import './styles.css'

export default function NavBar() {
    return (
        <Navbar style={{marginTop:"10px"}}>
            <Navbar.Brand className="NavBarName">Jae Kim</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="aboutMe" spy={true} smooth={true} duration={500} >About Me</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="skill" spy={true} smooth={true} duration={500} >Skills</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" className="NavBarLink" to="contactMe" spy={true} smooth={true} duration={500} >Contact</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
