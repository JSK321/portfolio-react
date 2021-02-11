import React, { Component } from 'react'
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'
import './styles.css'

export default class Projects extends Component {
    state = {
        projects: projects,
    }

    render() {
        return (
            <div className="container">
                <figure className="row">
                    <figcaption className="col-md-12">
                        <h1>Projects</h1>
                        <hr />
                    </figcaption>
                </figure>
                <figure className="row">
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
                </figure>
            </div>
        )
    }
}
