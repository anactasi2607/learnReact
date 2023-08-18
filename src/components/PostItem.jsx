import React from 'react';
import {useNavigate} from 'react-router-dom';

import BaseButton from './UI/button/BaseButton';

const PostItem = (props) => {
  const router = useNavigate();

  return (
    <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>

          <p>{props.post.body}</p>
        </div>

        <div className='post__actions'>
          <BaseButton customClasses='post__action' onClick={() => router(`/posts/${props.post.id}`, { replace: true })}>открыть</BaseButton>
          <BaseButton customClasses='post__action' onClick={() => props.remove(props.post)}>удалить</BaseButton>
        </div>
      </div>
  );
}

export default PostItem;