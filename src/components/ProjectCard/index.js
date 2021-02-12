import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'

export default function ProjectCard(props) {
    return (
        <Card className="projectCard">
            <h2>{props.name}</h2>
            <Card.Img src={props.image} alt="Project Image" />
            <Card.Body className="projectCardBody">
                <strong>Summary</strong>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <strong>Technologies</strong>
                <Card.Text>
                    {props.technologies}
                </Card.Text>
                <Button className="projectLinkBtn" href={props.link} target="_blank" rel="noreferrer">Live</Button>
                <br></br>
                <Button className="projectLinkBtn" href={props.github} target="_blank" rel="noreferrer">GitHub</Button>
            </Card.Body>
        </Card>

    )
}
