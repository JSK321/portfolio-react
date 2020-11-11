import React from 'react'
import "./styles.css"

export default function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <hr />
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputName">Name</label>
                        <input type="name" className="form-control" id="inputName" placeholder="Name" />
                    </div>

                    <div className="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="formControlTextarea">Message</label>
                    <textarea className="form-control" id="formControlTextarea" rows="3" placeholder="Message"></textarea>
                </div>

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-dark submitBtn">Submit</button>
                </div>

            </form>
        </div>
    )
}
