import React from 'react';

import BaseButton from './UI/button/BaseButton';

const PostItem = (props) => {
  return (
    <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>

          <p>{props.post.body}</p>
        </div>

        <div className='post__actions'>
          <BaseButton onClick={() => props.remove(props.post)}>удалить</BaseButton>
        </div>
      </div>
  );
}

export default PostItem;