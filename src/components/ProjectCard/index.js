import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'

export default function ProjectCard(props) {
    return (
        <Card className="projectCard">
            <h2>{props.name}!</h2>
            <Card.Img src={props.image} alt="Project Image"/>
            <Card.Body className="projectCardBody">
                <Card.Text className="projectCardText">
                    fjdsajfl;dkajfkl;dasjfkl;sdjakl;fjdsakl;fjdaskl;fjdkl;ajfkl;dsajfkl;jdaskl;fjasdkl;jfkl;sdjfkl;dajfkl;sdjafl;ksdaj
                </Card.Text>
                <Button className="projectLinkBtn" href={props.link} target="_blank" rel="noreferrer">Live</Button>
                <br></br>
                <Button className="projectLinkBtn" href={props.github} target="_blank" rel="noreferrer">Github</Button>
            </Card.Body>
        </Card>

    )
}
