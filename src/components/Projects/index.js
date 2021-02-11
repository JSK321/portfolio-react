import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'
import './styles.css'

export default class Projects extends Component {
    state = {
        projects: projects,
    }

    render() {
        return (
            <div>
                <Row>
                    <figcaption className="col-md-12">
                        <h1>Projects</h1>
                        <hr />
                    </figcaption>
                </Row>
                <Row>
                    {this.state.projects.map((projectObj) => (
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
            </div>
        )
    }
}
