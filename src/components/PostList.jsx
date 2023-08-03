import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 className="empty">Посты не найдены!</h1>
    );
  }

  return (
    <div>
      <h1 className="title">
        {title}
      </h1>

      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem post={post} number={index + 1} remove={remove}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default PostList;