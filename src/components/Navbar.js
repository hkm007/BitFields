import React, { useState } from 'react';
import './css/navbar.css';
import { Link } from 'react-router-dom';
import LoginModal from './modals/LoginModal';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const login = () => {
        setOpenModal(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">BitFields</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto"></ul>
                        <div className="row my-2 my-lg-0">
                            { 
                                (isLoggedIn) 
                                ? 
                                <>
                                    <span className="my-2 my-sm-0 mr-3 ml-2">
                                        <Link to="/new"><i className="fa fa-plus"></i></Link>
                                    </span>
                                    <button className="btn btn-danger my-2 my-sm-0" type="button" onClick={() => logout()}>Logout</button>
                                </> 
                                :
                                <button className="btn btn-success my-2 my-sm-0" type="button" onClick={() => login()}>Login</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal open={setOpenModal} show={openModal} set={setIsLoggedIn} />

            

        </React.Fragment>
    )
} 

export default Navbar;
