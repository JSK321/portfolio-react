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
        <div>
            <h1 className="nameTitle">Jae Kim</h1>
            <h1 className="jobTitle">Full Stack Web Developer</h1>
            <Element name="aboutMe">
                <AboutMe />
            </Element>
            <Element name="projects">
                <Projects />
            </Element>
            <Element name="skills">
                <Skills />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>

    )
}
