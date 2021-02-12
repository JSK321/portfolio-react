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
                    <Nav.Link eventKey="disabled" disabled>
                        <strong>© Copyright Jae Kim</strong>
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link>
                        <Link activeClass="active" className="backToTop" to="top" spy={true} smooth={true} duration={500} ><strong>Back to top</strong></Link>
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link eventKey="disabled" disabled>
                        <strong>Built with: JavaScript, React.js, Bootstrap</strong>
                    </Nav.Link>
                </Col>
            </Row>
        </div>
    )
}
