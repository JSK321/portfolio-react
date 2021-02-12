import React from 'react'
import { Card, Row, Col, } from 'react-bootstrap'
import Picture from '../../utils/Images/me.jpg'
import './styles.css'

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <Row>
                <Card.Img src={Picture} alt="Picture Placeholder" className="about-me-img" />
            </Row>
            <Row>
                <Card className="aboutMeCard">
                    <Card.Text>
                        I am an ambitious person that is working to become a full-stack developer. I love to
                        be engaged with my hands, and being able to code will provide a new outlet to test my creativity. I am new in this field but I
                        am always willing to learn new traits everyday. I always give the maximum effort into a task and I strive to deliver a satisfying end result. In my free time, I enjoy
                        assembling custom mechanical keyboards as I find the acoustics and the uniqueness of the mechanical
                        keyboard satisfying.
                    </Card.Text>
                </Card>
            </Row>
        </div>
    )
}