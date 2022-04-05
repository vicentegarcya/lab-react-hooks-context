import React, { useEffect, useState } from "react";
import { getComments } from "../../services/ListItemsService";
import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getComments()
            .then(comments => {
                setLoading(false);
                setComments(comments);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <div className="comments-wrapper">
            {
                loading ? ( 'Loading...' ) :
                comments.filter(comment => comment.id <= 5).map(comment => (
                    <div className="comment-div mb-4" key={comment.id}>
                        <h5>by: <span>{comment.email}</span></h5>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Comments;