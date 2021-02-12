import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import './styles.css'

export default function Contact() {
    return (
        <Card className="contactMeCard">
            <h1 className="skillsTitle">Contact me</h1>
            <Row className="contactRow">
                <Col>
                    <Button
                        href="https://www.linkedin.com/in/jae-kim-31a56b1b5/"
                        target="_blank"
                        className="contactMeBtn"
                    >
                        <strong>Linkedin</strong>
                    </Button>
                </Col>
                <Col>
                    <Button
                        href="https://github.com/JSK321"
                        target="_blank"
                        className="contactMeBtn"
                    >
                        <strong>GitHub</strong>
                    </Button>
                </Col>
                <Col>
                    <Button
                        href="https://docs.google.com/document/d/14tQljuyZufhgLDpHjVz9Lp3D3-OV7fbjQKA-8Inv-KM/edit?usp=sharing"
                        target="_blank"
                        className="contactMeBtn"
                    >
                        <strong>Resume</strong>
                    </Button>
                </Col>
            </Row>
            <Row className="contactRow">
                <Col>
                    <Card.Text style={{ textAlign: "center" }}>
                        <strong>Email</strong>
                        <p>
                            jaeshinkim321@gmail.com
                        </p>
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Text style={{ textAlign: "center" }}>
                        <strong>Phone</strong>
                        <p>
                            253-292-7744
                        </p>
                    </Card.Text>
                </Col>
            </Row>
        </Card>
    )
}
