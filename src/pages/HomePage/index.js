import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Element } from "react-scroll"
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'
import Contact from '../../components/Contact'
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
            <Row>
                <Element name="skills">
                    <Skills />
                </Element>
            </Row>
            <Row>
                <Element name="contact">
                    <Contact />
                </Element>
            </Row>
        </Container>
    )
}
