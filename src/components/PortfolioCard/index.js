import React from 'react'

export default function PortfolioCard(props) {
    return (
        <figcaption className="col-md-6 project">
            <div className="hovereffect">
                <img src={props.image} alt="Work-Scheduler" className="img-fluid" />
                <div className="overlay">
                    <h2>{props.name}!</h2>
                    <a className="btn btn-dark" href={props.github} target="_blank" >{props.name}</a>
                    <a className="btn btn-dark" href={props.link} target="_blank" >Github</a>
                </div>
            </div>
        </figcaption>
    )
}
