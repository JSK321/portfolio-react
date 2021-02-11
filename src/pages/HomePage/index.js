import React from 'react'
import { Container } from 'react-bootstrap'
import { Element } from "react-scroll"
import NavBar from '../../components/NavBar'
import AboutMe from '../../components/AboutMe'
import Portfolio from '../Portfolio'
import './styles.css'

export default function HomePage() {
    return (
        <Container>
            <NavBar />
            <Element name="aboutMe">
                <AboutMe />
            </Element>
            <Element name="projects">
                <Portfolio />
            </Element>
        </Container>
    )
}
