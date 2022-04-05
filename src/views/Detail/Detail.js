import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../../components/Comments/Comments";
import { getSinglePost } from "../../services/ListItemsService";
import './Detail.css';

const Detail = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getSinglePost(id)
            .then(post => {
                setLoading(false)
                setPost(post);
            })
                .catch(e => console.error(e))
    }, [id]);

    return (
        <div className="details-page-div mt-5">
        { loading ? ( 'Loading...' ) :
            <>
                <div className="single-post-div">
                    <h1>{post.title}</h1>
                    <p className="mt-5">{post.body}</p>
                </div>
                <div className="comments-div mt-5">
                    <h4 className="mb-4">Comments</h4>
                    <Comments />
                </div>
            </>
        }
        </div>
    );
};

export default Detail;