import React from 'react'
import './styles.css'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">Jae Kim</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <section className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="aboutme">About</a>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    )
}
