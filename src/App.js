import React, {useMemo, useState} from 'react';

import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'А Javascript', body: 'Б Текст поста длинный'},
    {id: 2, title: 'В Javascript 2', body: 'С Текст поста длинный'},
    {id: 3, title: 'Г Javascript 3', body: 'Я Текст поста длинный'},
    {id: 4, title: 'Б Javascript 4', body: 'А Текст поста длинный'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  function createNewPost(post) {
    setPosts([...posts, {...post, id: Date.now()}]);
  }

  function removePost(post) {
    setPosts(posts.filter(element => element.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createNewPost} remove={removePost} />

      <hr className="border"/>

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
    </div>
  );
}

export default App;
