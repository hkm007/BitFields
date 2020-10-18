import React, { useState } from 'react';
import '../css/newpost.css';
import Footer from '../Footer';
import firebase from '../../firebase';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function NewPost() {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const savePost = (e) => {
        e.preventDefault();
        firebase.postData(title, content)
        .then(() => {
            toast.success("Posted Successfully");
            history.push("/");
        })
        .catch((err) => {
            toast.error("Something went wrong");
        })
    }

    return (
        <React.Fragment>    
            <div className="container mb-4">
                <div className="card col-lg-10 mx-auto my-4 p-4">
                    <div>
                        <h6 className="display-4">New Post</h6>
                    </div>
                    <hr />
                    <form onSubmit={(e) => savePost(e)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" autoFocus id="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" rows="12" onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>
                        <button className="btn btn-outline-primary" type="submit"><i className="fa fa-save"></i> Post</button>
                    </form>
                    <hr />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default NewPost;
