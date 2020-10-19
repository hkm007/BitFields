import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../firebase';
import moment from 'moment';
import '../css/postdetail.css';

function PostDetail(props) {
    let { post_id } = (props.match.params)
    const history = useHistory();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const ac = new AbortController();
        setLoading(true);
        let temp = []
        firebase.getPost(post_id)
        .then((querySnapshot) => {
            const docSnapshots = querySnapshot.docs;
            temp.push(docSnapshots[0].data());
            setData(temp)
            setLoading(false);
        })
        .catch((err) => {
            toast.error("Something went wrong");
            history.push("/");
        })
        return () => ac.abort()
    }, [history, post_id])

    return (
        <React.Fragment>
            <div className="container mb-4">
                { (loading) ? <center><h4 className="mt-5">Loading...</h4></center> 
                    :
                    data.map((post) => {
                        return (
                            <div className="card col-lg-10 mx-auto my-4 single" key={post.postId}>
                                <div className="card-body">
                                    <h5 className="card-title single-info">{post.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Posted On: {moment.unix(post.publishedOn.nanoseconds).format('MMMM Do YYYY, h:mm:ss a')}</h6> 
                                    <hr />
                                    <pre className="card-text">{post.content}</pre>
                                    <hr />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default PostDetail
