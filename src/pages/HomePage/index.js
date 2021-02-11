import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Element } from "react-scroll"
import NavBar from '../../components/NavBar'
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'
import './styles.css'

export default function HomePage() {
    return (
        <Container>
            <Row>
                <Element name="aboutMe">
                    <AboutMe />
                </Element>
            </Row>
            <Row>
                <Element name="projects">
                    <Projects />
                </Element>
            </Row>
        </Container>
    )
}
