import React from 'react'
import { Card, Row, Col} from 'react-bootstrap'
import Picture from '../../utils/Images/me.jpg'
import './styles.css'

export default function AboutMe() {
    return (
            <Card className="aboutMeCard">
                <Row>
                    <Col md={12}>
                        <h1 className="skillsTitle">About Me</h1>
                    </Col>
                    <Col md={4}>
                        <Card.Img src={Picture} alt="Picture Placeholder" className="img-fluid profileImage" />
                    </Col>
                    <Col md={8}>
                        <Card.Text className="aboutMeBio">
                            I am full-stack web developer who is persistent at completing set goals. Even when goals are not met, I do not let them discourage me from continuing forward.
                            I love to be engaged with my hands, and being able to code will provide a new outlet to test my creativity. 
                            I am a graduate of University of Washington Coding Bootcamp where I developed skills in JavaScript, React.js, Node.js, Express.js, and MySQL. 
                            However, with little experience in the field, I still have much to learn and I am always willing to develop new traits. 
                            I have been in the service industry for many years, and it has taught me to give the most effort into a task to deliver the most satisfying result. In my free time, I enjoy
                            assembling custom mechanical keyboards as I find the acoustics and the uniqueness of the mechanical
                            keyboard satisfying.
                    </Card.Text>
                    </Col>
                </Row>
            </Card>
    )
}