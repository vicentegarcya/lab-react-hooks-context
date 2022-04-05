import http from './BaseService';

export const getPosts = () => {
    return http.get('/posts')
};

export const getComments = () => {
    return http.get('/comments')
};

export const getSinglePost = (id) => {
    return http.get(`/posts/${id}`)
};