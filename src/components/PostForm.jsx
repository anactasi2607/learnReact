import React, {useState} from 'react';

import BaseButton from './UI/button/BaseButton';
import BaseInput from './UI/input/BaseInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  function addNewPost(event) {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now()
    }

    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form className="post-form">
      <div className="post-form__row">
        <BaseInput type="text" placeholder="Название поста" value={post.title} onChange={(event) => setPost({...post, title: event.target.value})} />
      </div>

      <div className="post-form__row">
        <BaseInput className="post-form__row" type="text" placeholder="Описание поста" value={post.body} onChange={(event) => setPost({...post, body: event.target.value})} />
      </div>

      <div className="post-form__row">
        <BaseButton className="post-form__row" onClick={addNewPost}>создать пост</BaseButton>
      </div>
    </form>
  );
}

export default PostForm;