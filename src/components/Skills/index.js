import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './styles.css'

export default function Skills() {
    return (
        <div>
            <Row>
                <h1 className="skillsTitle">Skills</h1>
            </Row>
            <Row className="skillsRow">
                <Col>
                    <h3>Languages</h3>
                    <p>JavaScript, CSS, HTML</p>
                </Col>
                <Col>
                    <h3>Libraries</h3>
                    <p>React.js, Handlebars, Jquery</p>
                </Col>
                <Col>
                    <h3>Frameworks</h3>
                    <p>Node.js, Express.js, Bootstrap</p>
                </Col>
                <Col>
                    <h3>Databases</h3>
                    <p>MySQL</p>
                </Col>
                <Col>
                    <h3>Tools</h3>
                    <p>GitHub, Heroku</p>
                </Col>
            </Row>
        </div>
    )
}
