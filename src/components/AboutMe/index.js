import React from 'react'
import Image from '../../utils/Images/me.jpg'
import "./styles.css"

export default function AboutMe() {
    return (
        <div className="container">
            <figure className="row">
                <figcaption className="col-md-12">
                    <h1>About Me</h1>
                    <hr />

                    <img src={Image} ALIGN="left" alt="Picture Placeholder" className="about-me-img" />

                    <p> I am an ambitious person that is working to become a full-stack developer. I love to
                    be engaged with my hands and to be able to code will be a new outlet to test my creativity. I am new in this field but I
                    am always willing to learn new traits everyday. I always give the maximum effort into a task and I strive to deliver a satisfying end result. In my free time, I enjoy
                    assembling custom mechanical keyboards as I find the acoustics and the uniqueness of the mechanical
                    keyboard satisfying.
                    </p>

                    <a className="btn btn-dark" href="https://www.linkedin.com/in/jae-kim-31a56b1b5/" target="_blank" >Linkedin</a>
                    <a className="btn btn-dark" href="https://github.com/JSK321" target="_blank" >GitHub</a>
                    <a className="btn btn-dark" href="https://docs.google.com/document/d/1DJj88-hv__aqLyTUZuTATGz8fmnwqgsl356eMAdK38c/edit" target="_blank" >Resume</a>
                    <p>Email: jaeshinkim321@gmail.com</p>
                    <p>Phone: 253-292-7744</p>
                </figcaption>
            </figure>
        </div>
    )
}
