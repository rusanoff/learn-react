import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/actions';
import { Post } from './Post';

export const FetchedPosts: React.FC = () => {
  const dispatch = useDispatch();
  const posts: any = useSelector((state: any) => state.posts.fetchedPosts);
  const loading: boolean = useSelector((state: any) => state.app.loading);

  const handleClick = () => {
    dispatch(fetchPosts());
  };

  if (loading) {
    return (
      <div className="spinner-border text-danger" role="status" />
    );
  }

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={handleClick}>Загрузить</button>
    );
  }

  return (
    <>
      { posts.map((post: any) => <Post key={post.id} post={post} />) }
    </>
  );
};
