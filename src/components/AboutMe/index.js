import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Image from '../../utils/Images/me.jpg'
import './styles.css'
// import { Nav, Navbar } from 'react-bootstrap'

export default function AboutMe() {
    return (
        <figcaption>
            <h1>About Me</h1>
            <hr />

            <img src={Image} ALIGN="left" alt="Picture Placeholder" className="about-me-img" />

            <p> I am an ambitious person that is working to become a full-stack developer. I love to
            be engaged with my hands, and being able to code will provide a new outlet to test my creativity. I am new in this field but I
            am always willing to learn new traits everyday. I always give the maximum effort into a task and I strive to deliver a satisfying end result. In my free time, I enjoy
            assembling custom mechanical keyboards as I find the acoustics and the uniqueness of the mechanical
            keyboard satisfying.
            </p>
        </figcaption>
    )
}