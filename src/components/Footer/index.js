import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from "react-scroll"
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
                    <Nav.Link>
                        <Link activeClass="active" className="backToTop" to="top" spy={true} smooth={true} duration={500} ><strong>Back to top</strong></Link>
                    </Nav.Link>
                </Col>
                <Col>
                    <strong>Built With: Javascript, React.js, Bootstrap</strong>
                </Col>
            </Row>
        </div>
    )
}
