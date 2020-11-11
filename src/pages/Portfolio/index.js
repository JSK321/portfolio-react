import React, { Component } from 'react'
import projects from '../../projects.json'

export default class Portfolio extends Component {
    state = {
       projects: projects,
    }

    render() {
        return (
            <div className="container">
                <figure className="row">
                    <figcaption className="col-md-12">
                        <h1>Portfolio</h1>
                        <hr />
                    </figcaption>
                </figure>
                
            {this.state.projects.map((projectObj) =>(
                <Portfolio 
                    key={projectObj.id}
                    id={projectObj.id}
                    name={projectObj.name}
                    image={projectObj.image}
                    github={projectObj.github}
                    link={projectObj.link}
                />
            ))}
            </div>
        )
    }
}
