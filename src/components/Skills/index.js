import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import './styles.css'

export default function Skills() {
    return (
        <Card className="skillsCard">
            <h1 className="skillsTitle">Skills</h1>
            <Row className= "skillsRow" noGutters>
                <Col md="auto">
                    <ul>
                        <h3>Languages</h3>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul>
                        <h3>Libraries</h3>
                        <li>React.js</li>
                        <li>Handlebars</li>
                        <li>Jquery</li>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul>
                        <h3>Frameworks</h3>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Bootstrap</li>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul>
                        <h3>Databases</h3>
                        <li>MySQL</li>
                    </ul>
                </Col>
                <Col md="auto">
                    <ul>
                        <h3>Tools</h3>
                        <li>GitHub</li>
                        <li>Heroku</li>
                    </ul>
                </Col>
            </Row>
        </Card>
    )
}
