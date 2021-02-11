import React from 'react'
import { Container } from 'react-bootstrap'
import { Element } from "react-scroll"
import NavBar from '../../components/NavBar'
import AboutMe from '../AboutMe'
import Portfolio from '../Portfolio'

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
