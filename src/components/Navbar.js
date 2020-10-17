import React from 'react';
import './css/navbar.css';

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">BitFields</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                        </ul>
                        <div className="my-2 my-lg-0">
                            <button className="btn btn-success my-2 my-sm-0" type="button" onClick={()=>alert('Login')}>Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
} 

export default Navbar;
