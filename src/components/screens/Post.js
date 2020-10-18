import React, { useEffect, useState } from 'react';
import '../css/post.css'
import Jumbotron from './Jumbotron';
import Footer from '../Footer';
import firebase from '../../firebase';
import moment from 'moment';


function PostContent() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        let temp = []
        firebase.getData()
        .then((querySnapshot) => {
            const docSnapshots = querySnapshot.docs;
            for(let i in docSnapshots) {
                temp.push(docSnapshots[i].data());
            }
            setBlog(temp);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <React.Fragment>
            <Jumbotron />
            <div className="container mb-4">
                {
                    blog.map((post) => {
                        return (
                            <div className="card col-lg-10 mx-auto my-4" key={post.postId}>
                                <div className="card-body post-info">
                                    <h5 className="card-title">{post.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Posted On: {moment.unix(post.publishedOn.seconds).format('MMMM Do YYYY, h:mm:ss a')}</h6> 
                                    <hr />
                                    <p className="card-text">{post.content}</p>
                                    <hr />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default PostContent
