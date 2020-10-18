import React, { useContext } from 'react';
import './css/navbar.css';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../firebase';
import { UserContext } from '../App';

function Navbar() {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext);

    const logout = () => {
        firebase.logout();
        localStorage.clear()
        dispatch({type:"CLEAR"})
        history.push('/')
    }

    const renderList = () => {
        if(state) {
            return [
                <Link to="/new" className="my-2 my-sm-0 mr-3 ml-2" key="3"><i className="fa fa-plus"></i></Link>,
                <a href="#logout" className="btn btn-danger my-2 my-sm-0" type="button" onClick={() => logout()} key="2">Logout</a>
            ]
        }
        else {
            return [
                <Link className="btn btn-success ml-3 my-2 my-sm-0" type="button" to="/login" key="1">Login</Link>
            ]
        }
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
                            { renderList() }
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
} 

export default Navbar;
