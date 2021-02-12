import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import './styles.css'

export default function Contact() {
    return (
        <Card>
            <h1>Contact me</h1>
            <Row className="skillsRow">
                <Col>
                    <Button
                        href="https://www.linkedin.com/in/jae-kim-31a56b1b5/"
                        target="_blank" >
                        Linkedin
                    </Button>
                </Col>
                <Col>
                    <Button
                        href="https://github.com/JSK321"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Col>
                <Col>
                    <Button
                        href="https://docs.google.com/document/d/14tQljuyZufhgLDpHjVz9Lp3D3-OV7fbjQKA-8Inv-KM/edit?usp=sharing"
                        target="_blank" >
                        Resume
                    </Button>
                </Col>
            </Row>
            <Row className="contactRow">
                <Card.Text>

                : jaeshinkim321@gmail.com

                : 253-292-7744
            </Card.Text>
            </Row>
        </Card>
    )
}
