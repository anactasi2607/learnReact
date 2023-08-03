import React, {useState} from 'react';

import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import BaseButton from './components/UI/button/BaseButton';
import BaseModal from './components/UI/modal/BaseModal';
import { usePosts } from './hooks/usePosts';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'А Javascript', body: 'Б Текст поста длинный'},
    {id: 2, title: 'В Javascript 2', body: 'С Текст поста длинный'},
    {id: 3, title: 'Г Javascript 3', body: 'Я Текст поста длинный'},
    {id: 4, title: 'Б Javascript 4', body: 'А Текст поста длинный'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  function createNewPost(post) {
    setPosts([...posts, {...post, id: Date.now()}]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter(element => element.id !== post.id));
  }

  return (
    <div className="App">
      <BaseModal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} remove={removePost} />
      </BaseModal>

      <BaseButton onClick={() => setModal(true)}>создать пост</BaseButton>

      <hr className="border"/>

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
    </div>
  );
}

export default App;
