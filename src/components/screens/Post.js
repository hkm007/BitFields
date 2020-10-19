import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/post.css'
import Jumbotron from '../Jumbotron';
import firebase from '../../firebase';
import moment from 'moment';


function PostContent() {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let temp = []
        firebase.getData()
        .then((querySnapshot) => {
            const docSnapshots = querySnapshot.docs;
            for(let i in docSnapshots) {
                temp.push(docSnapshots[i].data());
            }
            setBlog(temp);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <React.Fragment>
            <Jumbotron />
            <div className="container mb-4">
                { (loading) ? <center><h4 className="mt-5">Loading...</h4></center> :
                    blog.map((post) => {
                        return (
                            <div className="card col-lg-10 mx-auto my-4 all" key={post.postId}>
                                <div className="card-body post-info">
                                    <Link to={`/post/${post.postId}`} style={{textDecoration: 'None'}}><h5 className="card-title title">{post.title}</h5></Link>
                                    <h6 className="card-subtitle mb-2 text-muted">Posted On: {moment.unix(post.publishedOn.seconds).format('MMMM Do YYYY, h:mm:ss a')}</h6> 
                                    <p className="author"><b>Author: hkm007</b></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default PostContent
