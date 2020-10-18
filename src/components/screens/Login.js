import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';
import '../css/login.css';

function Login() {
    const history = useHistory();
    const { dispatch } = useContext(UserContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHelper = (e) => {
        e.preventDefault();
        //logic
        firebase.login(email, password)
        .then((data) => {
            localStorage.setItem("user", JSON.stringify("username"))
            dispatch({type:"USER", payload:"username"})
            toast.success("Logged in!!");
            history.push('/')
        })
        .catch(err => {
            toast.error("Invalid Credentials");
        })
    }

    return (
        <React.Fragment>
            <div className="container mb-5">
                <div className="card card-login col-lg-4 mx-auto my-5 p-4">
                    <h3><i className="fa fa-sign-in"></i> Login</h3><hr />
                    <form onSubmit={(e) => loginHelper(e)}>
                        <div className="form-group">
                            <label htmlFor="email"><i className="fa fa-user"></i> Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoFocus placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><i className="fa fa-key"></i> Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <hr />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
