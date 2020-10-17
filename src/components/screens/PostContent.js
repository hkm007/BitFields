import React from 'react';
import '../css/postcontent.css'
import Jumbotron from './Jumbotron';

function PostContent() {
    return (
        <React.Fragment>
            <Jumbotron />
            <div className="container mb-4">
                <div className="card col-lg-10 mx-auto my-4">
                    <div className="card-body">
                        <h5 className="card-title">Kotlin - The Next Generation Language</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Published: 18 Oct, 2020</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-lg-10 mx-auto my-4">
                    <div className="card-body">
                        <h5 className="card-title">Kotlin - The Next Generation Language</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Published: 18 Oct, 2020</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-lg-10 mx-auto my-4">
                    <div className="card-body">
                        <h5 className="card-title">Kotlin - The Next Generation Language</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Published: 18 Oct, 2020</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PostContent
