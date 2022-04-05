import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../services/ListItemsService';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts()
            .then(posts => {
                setLoading(false);
                setPosts(posts);
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <div className="posts-wrapper container mt-3">
            {   loading ? ( "Loading..." ) :
                posts.map(post => (
                    <div className='post-wrapper' key={post.id}>
                        <Link to={`/${post.id}`}>
                            <div className='post-div mt-5' key={post.id}>
                                <h3>{post.title}</h3>
                                <p className='mt-4'>{post.body}</p>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Posts;