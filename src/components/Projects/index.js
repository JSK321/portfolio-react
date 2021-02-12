import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'
import './styles.css'

export default function Projects() {
    const [projectState, setProjectState] = useState({
        projects: projects,
    })

    return (
        <Card>
            <Row>
                <figcaption className="col-md-12">
                    <h1>Projects</h1>
                </figcaption>
            </Row>
            <Row>
                {projectState.projects.map((projectObj) => (
                    <ProjectCard
                        key={projectObj.id}
                        id={projectObj.id}
                        name={projectObj.name}
                        image={projectObj.image}
                        github={projectObj.github}
                        link={projectObj.link}
                    />
                ))}
            </Row>
        </Card>
    )

}
