import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './styles.css'

export default function Footer() {

    return (
        <div className="footer" >
            <Row>
                <Col>
                    <strong>© Copyright Jae Kim</strong>
                </Col>
                <Col>
                    <strong>Built With: Javascript, React.js, Bootstrap</strong>
                </Col>
            </Row>
        </div>
    )
}
