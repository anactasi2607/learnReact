import React, {useEffect, useState, useMemo, useRef} from 'react';

import '../styles/App.css';

import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';

import { getPageCount } from '../utils/pages';

import PostService from '../API/PostService';

import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import BaseButton from '../components/UI/button/BaseButton';
import BaseModal from '../components/UI/modal/BaseModal';
import BaseLoader from '../components/UI/loader/BaseLoader';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
    const response = await PostService.getAllPosts(limit, page);

    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];

    setTotalPages(getPageCount(totalCount, limit))
  })

  const hasPosts = useMemo(() => {
    return posts.length > 0;
  }, [posts]);

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page]);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  function createNewPost(post) {
    setPosts([...posts, {...post, id: Date.now()}]);
    setModal(false);
  };

  function removePost(post) {
    setPosts(posts.filter(element => element.id !== post.id));
  };

  return (
    <div className="App">
      <BaseModal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} remove={removePost} />
      </BaseModal>

      <BaseButton onClick={() => setModal(true)}>создать пост</BaseButton>

      <hr className="border"/>

      <PostFilter filter={filter} setFilter={setFilter} />

      {
        postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }

      {
        isPostsLoading &&
        <div className="loader"><BaseLoader /></div>
      }

      {
        hasPosts &&
        <div>
          <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
        </div>
      }

      <div ref={lastElement}>{isPostsLoading && hasPosts && <div className="loader"><BaseLoader /></div>}</div>
    </div>
  );
}

export default App;
