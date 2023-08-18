import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

import PostService from '../API/PostService';

import { useFetching } from '../hooks/useFetching';

import BaseLoader from '../components/UI/loader/BaseLoader';

const PostDetail = () => {
  const params = useParams();

  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async(id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchPostComments, isPostCommentsLoading, postCommentsError] = useFetching(async(id) => {
    console.log('fetchPostComments');
    const response = await PostService.getPostCommentsById(id);
    setPostComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchPostComments(params.id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID {params.id}</h1>

      {isLoading
        ? <BaseLoader />
        : <div>
            <div>{post.id}. {post.title}</div>

            <h1>Комментарии</h1>
            {
              isPostCommentsLoading
                ? <BaseLoader />
                : <div>
                    {postComments.map(comment =>
                      <div key={comment.id}>
                        <h5>{comment.email}</h5>
                        <p>{comment.body}</p>
                      </div>
                    )}
                </div>
            }
          </div>}
    </div>
  );
}

export default PostDetail;
