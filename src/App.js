import React, {useEffect, useState} from 'react';

import './styles/App.css';

import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';

import { getPageCount } from './utils/pages';

import PostService from './API/PostService';

import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import BaseButton from './components/UI/button/BaseButton';
import BaseModal from './components/UI/modal/BaseModal';
import BaseLoader from './components/UI/loader/BaseLoader';
import BasePagination from './components/UI/pagination/BasePagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
    const response = await PostService.getAllPosts(limit, page);

    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, []);

  function createNewPost(post) {
    setPosts([...posts, {...post, id: Date.now()}]);
    setModal(false);
  };

  function removePost(post) {
    setPosts(posts.filter(element => element.id !== post.id));
  };

  function changePage(page) {
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <BaseModal visible={modal} setVisible={setModal}>
        <PostForm create={createNewPost} remove={removePost} />
      </BaseModal>

      <BaseButton onClick={() => setModal(true)}>создать пост</BaseButton>

      <hr className="border"/>

      <PostFilter filter={filter} setFilter={setFilter} />
      {
        postError
        ? <h1>Произошла ошибка ${postError}</h1>
        : isPostsLoading
          ? <div className="loader"><BaseLoader /></div>
          : <div>
            <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Список постов" />
            {/* TODO: пересмотреть стили везде */}

            <BasePagination page={page} totalPages={totalPages} changePage={changePage} />
          </div>
      }
    </div>
  );
}

export default App;
