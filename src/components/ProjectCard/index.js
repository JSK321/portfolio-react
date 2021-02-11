import React from 'react'

export default function ProjectCard(props) {
    return (
        <figcaption className="col-md-6 project">
            <div className="hovereffect">
                <img src={props.image} alt="Work-Scheduler" className="img-fluid" />
                <div className="overlay">
                    <h2>{props.name}!</h2>
                    <p>loreipsum</p>
                    <a className="btn btn-dark" href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
                    <a className="btn btn-dark" href={props.github} target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </figcaption>
    )
}
