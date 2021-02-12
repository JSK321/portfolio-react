import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

export default function Contact() {
    return (
        <Card>
            <h1>Contact me</h1>
            <Button href="https://www.linkedin.com/in/jae-kim-31a56b1b5/" target="_blank" >Linkedin</Button>
            <Button href="https://github.com/JSK321" target="_blank" >GitHub</Button>
            <Button href="https://docs.google.com/document/d/1DJj88-hv__aqLyTUZuTATGz8fmnwqgsl356eMAdK38c/edit" target="_blank" >Resume</Button>
            <p>Email: jaeshinkim321@gmail.com</p>
            <p>Phone: 253-292-7744</p>
        </Card>
    )
}
