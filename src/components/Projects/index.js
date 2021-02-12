import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'
import './styles.css'

export default function Projects() {
    const [projectState, setProjectState] = useState({
        projects: projects,
    })

    return (
        <Card className="projectsCard">
            <h1 className="skillsTitle">Projects</h1>
            <Row>
                {projectState.projects.map((projectObj) => (
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <ProjectCard
                            key={projectObj.id}
                            id={projectObj.id}
                            name={projectObj.name}
                            image={projectObj.image}
                            github={projectObj.github}
                            link={projectObj.link}
                            description={projectObj.description}
                            technologies={projectObj.technologies}
                        />
                    </div>
                ))}
            </Row>
        </Card>
    )

}
